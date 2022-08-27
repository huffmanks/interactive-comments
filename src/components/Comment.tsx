import { MdAdd, MdRemove } from 'react-icons/md'

import ActionButton from './ActionButton'
import ProfileImage from './ProfileImage'

const Comment = () => {
    return (
        <div className='p-6 bg-white rounded-lg'>
            <div className='flex gap-7'>
                <div className='flex flex-col items-center'>
                    <button className='pt-2.5 pb-2 px-3 bg-very-light-gray rounded-tl-lg rounded-tr-lg'>
                        <MdAdd />
                    </button>
                    <span className='py-2 px-3 bg-very-light-gray text-moderate-blue font-bold'>12</span>
                    <button className='pt-2 pb-2.5 px-3 bg-very-light-gray rounded-bl-lg rounded-br-lg'>
                        <MdRemove />
                    </button>
                </div>
                <div>
                    <div className='flex justify-between items-center gap-6 mb-4'>
                        <div className='flex justify-between items-center gap-4'>
                            <ProfileImage imageSrc='amy' imageAlt='amy' />
                            <div className='text-dark-blue font-medium'>amyrobson</div>
                            <div className='text-sm'>1 month ago</div>
                        </div>
                        <ActionButton icon='MdReply' color='blue' buttonText='Reply' />
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt sequi saepe corporis quidem beatae vel impedit sunt, vero modi neque tenetur, odio autem eligendi ratione
                        vitae excepturi? Esse, doloribus?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
