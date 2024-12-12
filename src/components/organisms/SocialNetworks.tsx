import SocialNetworkItem from "../molecules/SocialNetworkItem.tsx";
import igImage from "@/assets/images/Instagram_logo_2016.svg.png"
import stackoverflowImage from '@/assets/images/768px-Stack_Overflow_icon.svg.png'
import linkedinImage from '@/assets/images/LinkedIn_icon.svg'
import githubImage from '@/assets/github-mark-c791e9551fe4/github-mark/github-mark-white.svg'

const socialNetworks: SocialNetworkItem[] = [
    {image: githubImage.src, name: "GitHub logo", url: "https://github.com/briancaldera"},
    {image: igImage.src, name: 'Instagram logo', url: 'https://www.instagram.com/brian_alexx7/'},
    {image: linkedinImage.src, name: "LinkedIn logo", url: "https://www.linkedin.com/in/brian-caldera-724049244/"},
    {image: stackoverflowImage.src, name: "StackOverflow logo", url: "https://stackoverflow.com/users/19166078/brian-alex"},
]

const SocialNetworks = () => {
    return (
        <section className='py-12 px-8 sm:max-w-md mx-auto'>
            <header className='py-2'>
                <h2 className='text-white text-xl'>Find me on</h2>
            </header>

            <div className='grid grid-cols-4 gap-2'>
                {
                    socialNetworks.map(socialNetwork => (<SocialNetworkItem {...socialNetwork}/>))
                }
            </div>
        </section>
    )
}

export default SocialNetworks