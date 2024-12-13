import TechStackItem from "@/components/molecules/TechStackItem.tsx";
import nodeImage from "@/assets/images/nodejsLight.svg";
import tailwindImage from "@/assets/images/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";
import viteImage from "@/assets/images/vite.svg";
import reactImage from "@/assets/images/react_logo_dark.svg";
import laravelImage from "@/assets/images/laravel.min.svg";
import dockerImage from "@/assets/images/docker-logos/SVG/docker-mark-white.svg";
import psgImage from "@/assets/images/Postgresql_elephant.svg";
import astroImage from "@/assets/images/astro.svg";
import flutterImage from "@/assets/images/4fd5520fe28ebf839174.svg";

const techStackItem: TechStackItem[] = [
  {
    alt: "NodeJS",
    image: nodeImage.src,
    url: "https://nodejs.org/en",
    label: "Node.js",
  },
  {
    alt: "TailwindCSS",
    image: tailwindImage.src,
    url: "https://tailwindcss.com/",
    label: "TailwindCSS",
  },
  {
    alt: "Vite",
    image: viteImage.src,
    url: "https://vite.dev/",
    label: "Vite",
  },
  {
    alt: "React",
    image: reactImage.src,
    url: "https://react.dev/",
    label: "React",
  },
  {
    alt: "Laravel",
    image: laravelImage.src,
    url: "https://laravel.com/",
    label: "Laravel",
  },
  {
    alt: "Docker",
    image: dockerImage.src,
    url: "https://www.docker.com/",
    label: "Docker",
  },
  {
    alt: "Postgresql",
    image: psgImage.src,
    url: "https://www.postgresql.org/",
    label: "Postgresql",
  },
  {
    alt: "Astro",
    image: astroImage.src,
    url: "https://astro.build/",
    label: "Astro",
  },
  {
    alt: "Flutter",
    image: flutterImage.src,
    url: "https://flutter.dev/",
    label: "Flutter",
  },
];

const TechStack = () => {
  return (
    <section className="mx-auto max-w-[70rem] px-6 py-4 sm:py-8">
      <h2 className="mx-auto max-w-md py-2 text-xl font-bold text-white">
        Tech stack
      </h2>

      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {techStackItem.map((techStackItem) => (
          <TechStackItem key={techStackItem.label} {...techStackItem} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
