import { useComment } from '../context/CommentContext'

import ActionButton from './ActionButton'

interface IProps {
    comment: any
    viewport: string
}

const ActionGroup = ({ comment, viewport }: IProps) => {
    const { user, edit, handleReplyComment, handleEditComment, handleDeleteComment } = useComment()

    const styles: IStyles = {
        mobile: 'flex md:hidden',
        desktop: 'hidden md:flex',
    }

    return (
        <div className={`items-center gap-4 ${styles[viewport]}`}>
            {user.name === comment.user ? (
                <>
                    <ActionButton icon='MdDelete' color='red' buttonText='Delete' clickHandler={(e) => handleDeleteComment(e, comment.id)} />
                    <ActionButton icon={edit.isEditing ? 'MdUpdate' : 'MdEdit'} color='blue' buttonText={edit.isEditing ? 'Update' : 'Edit'} clickHandler={(e) => handleEditComment(e, comment.id)} />
                </>
            ) : (
                <ActionButton icon='MdReply' color='blue' buttonText='Reply' clickHandler={(e) => handleReplyComment(e, comment.id)} />
            )}
        </div>
    )
}

export default ActionGroup
