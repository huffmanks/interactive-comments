import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { currentUser } from '../data/data.json'
import { comments } from '../data/data.json'

type ClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void

interface IContext {
    user: string
    data: IComment[]
    content: string
    handleUser: () => void
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleAddComment: React.MouseEventHandler<HTMLButtonElement>
    handleIncreaseVote: ClickHandler
    handleDecreaseVote: ClickHandler
    handleDeleteComment: ClickHandler
}

const CommentContext = createContext({} as IContext)

const CommentContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState(currentUser)
    const [data, setData] = useState(comments)
    const [content, setContent] = useState('')
    const [vote, setVote] = useState({ id: 0, upvoted: false, downvoted: false })

    const updateData = (obj: any, updates: any) => {
        const updateToApply = updates.find((upd: any) => upd.id === obj.id)
        if (updateToApply) {
            obj.score = obj.score + updateToApply.score
        }

        for (let k in obj) {
            if (typeof obj[k] === 'object') {
                updateData(obj[k], updates)
            }
        }
    }

    const handleUser = () => {
        setUser('maxblagun')
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target

        setContent(value)
    }

    const handleAddComment = () => {
        if (!content) return

        const date = new Date()
        const unixTimestamp = Math.floor(date.getTime() / 1000)

        setData([
            ...data,
            {
                id: unixTimestamp,
                content,
                createdAt: 'Today',
                score: 0,
                user,
                replies: [],
            },
        ])

        setContent('')
    }

    const handleIncreaseVote: ClickHandler = (e, id) => {
        if (id === vote.id && vote.upvoted) return

        const updated = [...data]
        const updateArr = [{ id, score: 1 }]

        updateData(updated, updateArr)

        setData(updated)

        setVote({
            id,
            upvoted: true,
            downvoted: false,
        })
    }

    const handleDecreaseVote: ClickHandler = (e, id) => {
        if (id === vote.id && vote.downvoted) return

        const updated = [...data]
        const updateArr = [{ id, score: -1 }]

        updateData(updated, updateArr)

        setData(updated)
        setVote({
            id,
            upvoted: false,
            downvoted: true,
        })
    }

    const handleDeleteComment: ClickHandler = (e, id) => {
        e.preventDefault()

        const removeById = (arr: any, targetId: number) =>
            arr.reduce(
                (acc: any, obj: any) =>
                    obj.id === targetId
                        ? acc
                        : [
                              ...acc,
                              {
                                  ...obj,
                                  ...(obj.replies && { replies: removeById(obj.replies, targetId) }),
                              },
                          ],
                []
            )

        setData(removeById(data, id))
    }

    const contextValue: IContext = {
        user,
        data,
        content,
        handleUser,
        handleChange,
        handleAddComment,
        handleIncreaseVote,
        handleDecreaseVote,
        handleDeleteComment,
    }

    return <CommentContext.Provider value={contextValue}>{children}</CommentContext.Provider>
}

export default CommentContextProvider

export const useComment = () => {
    return useContext(CommentContext)
}
