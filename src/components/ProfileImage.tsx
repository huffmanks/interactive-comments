interface IProps {
    imageSrc: string
    imageAlt: string
}

const ProfileImage = ({ imageSrc, imageAlt }: IProps) => {
    return (
        <div>
            <img className='block w-10 max-w-full h-auto' src={imageSrc} alt={imageAlt} />
        </div>
    )
}

export default ProfileImage
