import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { currentUser } from '../data/data.json'
import { comments } from '../data/data.json'

interface IContext {
    currentUserInfo: IUser
    data: IComment[]
    handleChangeUser: () => void
}

const CommentContext = createContext({} as IContext)

const CommentContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [currentUserInfo, setCurrentUserInfo] = useState(currentUser)
    const [data, setData] = useState(comments)

    const handleChangeUser = () => {
        setCurrentUserInfo({
            image: '../assets/max-blagun.webp',
            username: 'maxblagun',
        })
    }

    const contextValue: IContext = {
        currentUserInfo,
        data,
        handleChangeUser,
    }

    return <CommentContext.Provider value={contextValue}>{children}</CommentContext.Provider>
}

export default CommentContextProvider

export const useComment = () => {
    return useContext(CommentContext)
}
