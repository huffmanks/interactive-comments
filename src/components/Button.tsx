import { MdReply, MdSend, MdUpdate } from 'react-icons/md'

const icons = { MdReply, MdSend, MdUpdate }

interface IProps {
    icon: keyof typeof icons
    buttonText: string
    clickHandler: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ icon, buttonText, clickHandler }: IProps) => {
    const Icon = icons[icon]

    return (
        <div>
            <button className='flex items-center justify-center gap-2 py-2 px-3 bg-moderate-blue rounded-lg transition-opacity ease-in-out duration-500 hover:opacity-50' onClick={clickHandler}>
                <Icon className='w-4 h-4 mb-0.5 fill-white' />
                <span className='text-white text-sm font-medium uppercase'>{buttonText}</span>
            </button>
        </div>
    )
}

export default Button
