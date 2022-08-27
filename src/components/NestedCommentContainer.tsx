import { PropsWithChildren } from 'react'

const NestedCommentContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className='flex flex-col gap-6 ml-8 pl-8 border-l-2 border-light-gray'>{children}</div>
}

export default NestedCommentContainer
