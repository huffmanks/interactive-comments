import { useComment } from '../context/CommentContext'

import Button from './Button'
import ProfileImage from './ProfileImage'
import Textarea from './Textarea'

const AddComment = () => {
    const { user, handleAddComment } = useComment()

    return (
        <div className='w-full p-6 bg-white rounded-lg shadow-md'>
            <div className='flex justify-center gap-7'>
                <ProfileImage imageSrc={user.image} imageAlt={user.username} />

                <Textarea placeholder='Add a comment...' />

                <Button icon='MdSend' buttonText='Send' clickHandler={handleAddComment} />
            </div>
        </div>
    )
}

export default AddComment
