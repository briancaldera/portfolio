import photo from "../../assets/photo.jpg";

const Profile = () => {
  return (
    <section className="mx-auto flex max-w-[70rem] flex-col items-center justify-center px-6 pt-12">
      <img
        src={photo.src}
        className="size-32 rounded-full object-cover"
        alt="Brian Caldera profile picture"
      />
      <div className="py-8 text-center text-white">
        <div className="text-sm text-neutral-300">Hi there!</div>
        <div className="text-2xl font-medium">
          I'm <span className="font-black">Brian Caldera</span>
        </div>
        <div className="text-4xl font-thin uppercase sm:text-6xl">
          Full stack developer
        </div>
      </div>
      <div>
        <h2 className="inline text-xl font-bold text-white">About me</h2>
        <hr />

        <p className="py-4 text-white">
          I'm a web developer, focused on containerization, cloud and SPAs.
        </p>
      </div>
    </section>
  );
};

export default Profile;
