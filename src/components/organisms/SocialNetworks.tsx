import SocialNetworkItem from "../molecules/SocialNetworkItem.tsx";
import igImage from "@/assets/images/Instagram_logo_2016.svg.png";
import stackoverflowImage from "@/assets/images/768px-Stack_Overflow_icon.svg.png";
import linkedinImage from "@/assets/images/LinkedIn_icon.svg";
import githubImage from "@/assets/github-mark-c791e9551fe4/github-mark/github-mark-white.svg";

const socialNetworks: SocialNetworkItem[] = [
  {
    image: githubImage.src,
    name: "GitHub logo",
    url: "https://github.com/briancaldera",
  },
  {
    image: igImage.src,
    name: "Instagram logo",
    url: "https://www.instagram.com/brian_alexx7/",
  },
  {
    image: linkedinImage.src,
    name: "LinkedIn logo",
    url: "https://www.linkedin.com/in/brian-caldera-724049244/",
  },
  {
    image: stackoverflowImage.src,
    name: "StackOverflow logo",
    url: "https://stackoverflow.com/users/19166078/brian-alex",
  },
];

const SocialNetworks = () => {
  return (
    <section className="mx-auto max-w-[70rem] px-6 py-4 sm:py-12">
      <h2 className="mx-auto max-w-md py-2 text-xl font-bold text-white">
        Find me on
      </h2>

      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {socialNetworks.map((socialNetwork) => (
          <SocialNetworkItem key={socialNetwork.name} {...socialNetwork} />
        ))}
      </div>
    </section>
  );
};

export default SocialNetworks;
