import { useComment } from '../context/CommentContext'

import Button from './Button'
import ProfileImage from './ProfileImage'
import Textarea from './Textarea'

const AddComment = () => {
    const { currentUserInfo } = useComment()

    return (
        <div className='w-full p-6 bg-white rounded-lg shadow-md'>
            <div className='flex justify-center gap-7'>
                <ProfileImage imageSrc={currentUserInfo.image} imageAlt={currentUserInfo.username} />

                <Textarea placeholder='Add a comment...' />

                <Button icon='MdSend' buttonText='Send' />
            </div>
        </div>
    )
}

export default AddComment
