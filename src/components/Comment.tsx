import { useComment } from '../context/CommentContext'

import ActionButton from './ActionButton'
import ProfileImage from './ProfileImage'
import VoteButton from './VoteButton'

const Comment = ({ comment }: any) => {
    const { user, handleDeleteComment } = useComment()

    return (
        <div className='w-full p-6 bg-white rounded-lg shadow-md'>
            <div className='flex gap-7'>
                <VoteButton score={comment.score} />
                <div className='w-full flex flex-col'>
                    <div className='flex justify-between items-center gap-6 mb-4'>
                        <div className='flex items-center gap-4'>
                            <ProfileImage imageSrc={comment.user.image} imageAlt={comment.user.username} />
                            <div className='text-dark-blue font-medium'>{comment.user.username}</div>
                            {user.username === comment.user.username && <div className='py-1 px-2 bg-moderate-blue text-white text-xs'>you</div>}
                            <div className='text-sm'>{comment.createdAt}</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            {user.username === comment.user.username ? (
                                <>
                                    <ActionButton icon='MdDelete' color='red' buttonText='Delete' clickHandler={(e) => handleDeleteComment(e, comment.id)} />
                                    <ActionButton icon='MdEdit' color='blue' buttonText='Edit' />
                                </>
                            ) : (
                                <ActionButton icon='MdReply' color='blue' buttonText='Reply' />
                            )}
                        </div>
                    </div>
                    <div className='flex-1'>
                        {comment?.replyingTo && <span className='text-moderate-blue font-medium'>@{comment.replyingTo}</span>} {comment.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
