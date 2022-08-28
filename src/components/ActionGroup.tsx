import { useComment } from '../context/CommentContext'

import ActionButton from './ActionButton'

interface IProps {
    comment: any
    viewport: string
}

const ActionGroup = ({ comment, viewport }: IProps) => {
    const { user, handleDeleteComment } = useComment()

    const styles: IStyles = {
        mobile: 'flex md:hidden',
        desktop: 'hidden md:flex',
    }

    return (
        <div className={`items-center gap-4 ${styles[viewport]}`}>
            {user.username === comment.user.username ? (
                <>
                    <ActionButton icon='MdDelete' color='red' buttonText='Delete' clickHandler={(e) => handleDeleteComment(e, comment.id)} />
                    <ActionButton icon='MdEdit' color='blue' buttonText='Edit' />
                </>
            ) : (
                <ActionButton icon='MdReply' color='blue' buttonText='Reply' />
            )}
        </div>
    )
}

export default ActionGroup
