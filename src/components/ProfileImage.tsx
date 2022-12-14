import amyrobson from '../avatars/amyrobson.webp'
import juliusomo from '../avatars/juliusomo.webp'
import maxblagun from '../avatars/maxblagun.webp'
import ramsesmiron from '../avatars/ramsesmiron.webp'

interface Images {
    [key: string]: string
}

const images: Images = { amyrobson, juliusomo, maxblagun, ramsesmiron }

const ProfileImage = ({ user }: any) => {
    const imageSrc = images[user]

    return (
        <div className='w-10'>
            <img className='block max-w-full h-auto' src={imageSrc} alt={user} />
        </div>
    )
}

export default ProfileImage
