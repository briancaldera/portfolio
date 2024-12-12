import photo from '../../assets/photo.jpg'

const Profile = () => {
    return (
        <section className='flex flex-col items-center justify-center py-12 px-8'>
            <img src={photo.src} className='size-32 object-cover rounded-full' alt='Brian Calderas profile picture'/>
            <div className='text-white py-8 text-center'>
                <div className='text-sm text-neutral-300'>Hi there!</div>
                <div className='text-2xl font-medium'>I'm <span className='font-black'>Brian Caldera</span></div>
                <div className='uppercase text-6xl font-thin'>Full stack developer</div>
            </div>
            <div>
                <h2 className='text-white text-xl inline font-bold'>About me</h2><hr/>

                <p className='text-white py-4'>
                    I'm a web developer, focused on containerization, cloud and SPAs.
                </p>
            </div>
        </section>
    )
}

export default Profile