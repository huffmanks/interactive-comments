import { useComment } from '../context/CommentContext'

import Button from './Button'
import ProfileImage from './ProfileImage'
import Textarea from './Textarea'

const AddComment = () => {
    const { user, handleAddComment } = useComment()

    return (
        <div className='w-full p-6 bg-white rounded-lg shadow-md'>
            <div className='w-full grid grid-cols-2 md:grid-cols-[40px_1fr_86px] justify-center gap-7'>
                <div className='col-span-1 order-2 md:order-none'>
                    <ProfileImage imageSrc={user.image} imageAlt={user.username} />
                </div>
                <div className='w-full col-span-2 md:col-span-1 order-1 md:order-none'>
                    <Textarea placeholder='Add a comment...' />
                </div>
                <div className='col-span-1 order-3 md:order-none justify-self-end'>
                    <Button icon='MdSend' buttonText='Send' clickHandler={handleAddComment} />
                </div>
            </div>
        </div>
    )
}

export default AddComment
