import { useComment } from '../context/CommentContext'

interface IProps {
    placeholder: string
}

const Textarea = ({ placeholder }: IProps) => {
    const { content, handleChange } = useComment()

    return (
        <div className='flex-1 p-1 border border-1 border-moderate-blue rounded-lg'>
            <textarea rows={4} className='block w-full p-3 outline-none resize-none' placeholder={placeholder} value={content} onChange={handleChange}></textarea>
        </div>
    )
}

export default Textarea
