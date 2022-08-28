interface IProps {
    imageSrc: string
    imageAlt: string
}

const ProfileImage = ({ imageSrc, imageAlt }: IProps) => {
    return (
        <div className='w-10'>
            <img className='block max-w-full h-auto' src={imageSrc} alt={imageAlt} />
        </div>
    )
}

export default ProfileImage
