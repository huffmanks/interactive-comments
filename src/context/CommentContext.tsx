import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { currentUser } from '../data/data.json'
import { comments } from '../data/data.json'

type ClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void

interface IContext {
    user: IUser
    data: IComment[]
    content: string
    handleUser: () => void
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    handleAddComment: React.MouseEventHandler<HTMLButtonElement>
    handleDeleteComment: ClickHandler
}

const CommentContext = createContext({} as IContext)

const CommentContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState(currentUser)
    const [data, setData] = useState(comments)
    const [content, setContent] = useState('')

    const handleUser = () => {
        setUser({
            image: '../assets/max-blagun.webp',
            username: 'maxblagun',
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target

        setContent(value)
    }

    const handleAddComment = () => {
        if (!content) return

        setData([
            ...data,
            {
                id: Number(data.length + 1),
                content,
                createdAt: 'Today',
                score: 0,
                user: {
                    image: user.image,
                    username: user.username,
                },
                replies: [],
            },
        ])

        setContent('')
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
        handleDeleteComment,
    }

    return <CommentContext.Provider value={contextValue}>{children}</CommentContext.Provider>
}

export default CommentContextProvider

export const useComment = () => {
    return useContext(CommentContext)
}
