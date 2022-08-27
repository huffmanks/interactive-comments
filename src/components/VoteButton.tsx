import { MdAdd, MdRemove } from 'react-icons/md'

const VoteButton = ({ score }: any) => {
    return (
        <div className='flex flex-col items-center'>
            <button className='group w-10 h-8 flex items-center justify-center bg-very-light-gray rounded-tl-lg rounded-tr-lg transition-all ease-in-out duration-300 hover:bg-moderate-blue'>
                <MdAdd className='transition-all ease-in-out duration-300 group-hover:fill-white' />
            </button>
            <span className='w-10 h-10 flex items-center justify-center bg-very-light-gray text-moderate-blue font-bold'>{score}</span>
            <button className='group w-10 h-8 flex items-center justify-center bg-very-light-gray rounded-bl-lg rounded-br-lg transition-all ease-in-out duration-300 hover:bg-moderate-blue'>
                <MdRemove className='transition-all ease-in-out duration-300 group-hover:fill-white' />
            </button>
        </div>
    )
}

export default VoteButton
