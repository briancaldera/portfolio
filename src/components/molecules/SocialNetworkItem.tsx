interface SocialNetworkItem {
    image: string;
    name: string
    url: string
}

const SocialNetworkItem = ({url, name, image}: SocialNetworkItem) => {
    return (
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <div className='saturate-0 bg-neutral-800 p2 rounded-xl border-2 border-neutral-600 p-4 sm:p-6 aspect-square'>
                <img alt={name} src={image} className='size-full hover:scale-110 transition duration-500'/>
            </div>
        </a>
    )
}

export default SocialNetworkItem