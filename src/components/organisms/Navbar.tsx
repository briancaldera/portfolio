import githubLogo from '../../assets/github-mark-c791e9551fe4/github-mark/github-mark-white.svg'

const GITHUB_LINK: string = 'https://github.com/briancaldera'

const Navbar = () => {
    return (
        <nav className="w-full fixed backdrop-blur-sm">
            <div className='max-w-[70rem] mx-auto py-6 flex items-center px-6'>
                <div>
                    <a className='' href='/'>
                        <p className='capitalize text-white text-2xl'>
                            <span className='font-black'>Brian</span>
                            <span className='text-neutral-300'>Caldera</span>
                        </p>
                    </a>
                </div>
                <div className='flex flex-1'>
                    <a className='ml-auto' href={GITHUB_LINK}>
                        <img className='size-8' src={githubLogo.src} alt='Github logo'/>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar