import amyrobson from '../avatars/amyrobson.webp'
import juliusomo from '../avatars/juliusomo.webp'
import maxblagun from '../avatars/maxblagun.webp'
import ramsesmiron from '../avatars/ramsesmiron.webp'

const images = { amyrobson, juliusomo, maxblagun, ramsesmiron }

interface IProps {
    user: keyof typeof images
}

console.log(images)

const ProfileImage = ({ user }: IProps) => {
    const imageSrc = images[user]

    return (
        <div className='w-10'>
            <img className='block max-w-full h-auto' src={imageSrc} alt={user} />
        </div>
    )
}

export default ProfileImage
