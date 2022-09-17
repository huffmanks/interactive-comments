import { Fragment } from 'react'

import { useComment } from './context/CommentContext'

import AddComment from './components/AddComment'
import Attribution from './components/Attribution'
import Comment from './components/Comment'
import NestedCommentContainer from './components/NestedCommentContainer'

const App = () => {
    const { data } = useComment()

    return (
        <div className='max-w-screen-md min-h-screen flex flex-col justify-center items-center gap-6 mx-auto px-4'>
            <h1 className='text-moderate-blue text-3xl'>Interactive comments</h1>
            {data.map((comment: IComment) => (
                <Fragment key={comment.id}>
                    <Comment comment={comment} />
                    {comment?.replies?.length !== 0 && (
                        <NestedCommentContainer classes='w-[calc(100%_-_32px)]'>
                            {comment?.replies?.map((reply: IReply) => (
                                <Fragment key={reply.id}>
                                    <Comment comment={reply} />
                                    {reply?.replies?.length !== 0 && (
                                        <NestedCommentContainer>
                                            {reply?.replies?.map((nestedReply) => (
                                                <Fragment key={nestedReply.id}>
                                                    <Comment comment={nestedReply} />
                                                </Fragment>
                                            ))}
                                        </NestedCommentContainer>
                                    )}
                                </Fragment>
                            ))}
                        </NestedCommentContainer>
                    )}
                </Fragment>
            ))}

            <AddComment name='newComment' />
            <Attribution />
        </div>
    )
}

export default App
