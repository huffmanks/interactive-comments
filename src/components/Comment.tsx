import { useComment } from '../context/CommentContext'

import ActionGroup from './ActionGroup'
import ProfileImage from './ProfileImage'
import VoteButton from './VoteButton'

const Comment = ({ comment }: any) => {
    const { user } = useComment()

    return (
        <div className='w-full p-6 bg-white rounded-lg shadow-md'>
            <div className='flex flex-col-reverse md:flex-row gap-7'>
                <div className='flex flex-wrap justify-between gap-5'>
                    <VoteButton score={comment.score} />
                    <ActionGroup comment={comment} viewport='mobile' />
                </div>

                <div className='w-full flex flex-col'>
                    <div className='flex justify-between items-center gap-6 mb-4'>
                        <div className='flex flex-wrap items-center gap-4'>
                            <ProfileImage imageSrc={comment.user.image} imageAlt={comment.user.username} />

                            <div className='text-dark-blue font-medium'>{comment.user.username}</div>

                            {user.username === comment.user.username && <div className='py-1 px-2 bg-moderate-blue text-white text-xs'>you</div>}

                            <div className='text-sm'>{comment.createdAt}</div>
                        </div>
                        <ActionGroup comment={comment} viewport='desktop' />
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
