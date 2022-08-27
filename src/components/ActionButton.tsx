import { MdOutlineEdit, MdDelete, MdReply } from 'react-icons/md'

const icons = { MdOutlineEdit, MdDelete, MdReply }

interface IProps {
    icon: keyof typeof icons
    color: string
    buttonText: string
}

const ActionButton = ({ icon, color, buttonText }: IProps) => {
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
        <button className='flex items-center justify-center gap-1'>
            <Icon className={`w-5 h-5 mb-1 ${styles.iconColor[color]}`} />
            <span className={`font-medium ${styles.textColor[color]}`}>{buttonText}</span>
        </button>
    )
}

export default ActionButton
