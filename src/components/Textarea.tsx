interface IProps {
    placeholder: string
}

const Textarea = ({ placeholder }: IProps) => {
    return (
        <div className='flex-1 p-1 border border-1 border-moderate-blue rounded-lg'>
            <textarea rows={4} className='block w-full p-3 outline-none resize-none' placeholder={placeholder}></textarea>
        </div>
    )
}

export default Textarea
