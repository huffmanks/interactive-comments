import { MdAdd, MdRemove } from 'react-icons/md'

import { useComment } from '../context/CommentContext'

interface IProps {
    id: number
    score: number
}

const VoteButton = ({ id, score }: IProps) => {
    const { handleIncreaseVote, handleDecreaseVote } = useComment()

    return (
        <div className='flex md:flex-col items-center'>
            <button
                className='group w-10 h-8 flex items-center justify-center bg-very-light-gray rounded-tl-lg rounded-bl-lg md:rounded-tr-lg md:rounded-bl-none transition-all ease-in-out duration-300 hover:bg-moderate-blue'
                onClick={(e) => handleIncreaseVote(e, id)}>
                <MdAdd className='transition-all ease-in-out duration-300 group-hover:fill-white' />
            </button>
            <span className='w-10 h-8 flex items-center justify-center bg-very-light-gray text-moderate-blue font-bold'>{score}</span>
            <button
                className='group w-10 h-8 flex items-center justify-center bg-very-light-gray rounded-tr-lg rounded-br-lg md:rounded-bl-lg md:rounded-tr-none transition-all ease-in-out duration-300 hover:bg-moderate-blue'
                onClick={(e) => handleDecreaseVote(e, id)}>
                <MdRemove className='transition-all ease-in-out duration-300 group-hover:fill-white' />
            </button>
        </div>
    )
}

export default VoteButton
