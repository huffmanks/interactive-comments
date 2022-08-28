import { MdEdit, MdDelete, MdReply } from 'react-icons/md'

const icons = { MdEdit, MdDelete, MdReply }

interface IProps {
    icon: keyof typeof icons
    color: string
    buttonText: string
    clickHandler?: React.MouseEventHandler<HTMLButtonElement>
}

const ActionButton = ({ icon, color, buttonText, clickHandler }: IProps) => {
    const Icon = icons[icon]

    const styles: IStyles = {
        iconColor: {
            blue: 'fill-moderate-blue',
            red: 'fill-soft-red',
        },
        textColor: {
            blue: 'text-moderate-blue',
            red: 'text-soft-red',
        },
    }
    return (
        <button className='flex items-center justify-center gap-1 transition-opacity ease-in-out duration-500 hover:opacity-50' onClick={clickHandler}>
            <Icon className={`w-5 h-5 mb-0.5 ${styles.iconColor[color]}`} />
            <span className={`font-medium ${styles.textColor[color]}`}>{buttonText}</span>
        </button>
    )
}

export default ActionButton
