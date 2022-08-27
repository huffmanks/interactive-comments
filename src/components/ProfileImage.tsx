import amy from '../assets/image-amyrobson.webp'
import julius from '../assets/image-juliusomo.webp'
import max from '../assets/image-maxblagun.webp'
import ramses from '../assets/image-ramsesmiron.webp'

const images = { amy, julius, max, ramses }

interface IProps {
    imageSrc: keyof typeof images
    imageAlt: string
}

const ProfileImage = ({ imageSrc, imageAlt }: IProps) => {
    return <img className='block w-10 max-w-full h-auto' src={images[imageSrc]} alt={imageAlt} />
}

export default ProfileImage
