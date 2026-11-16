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
import awsImage from "@/assets/images/tech-logos/aws.svg";
import dokployImage from "@/assets/images/tech-logos/dokploy.svg";
import {
  siNextdotjs,
  siVuedotjs,
  siTypescript,
  siExpress,
  siFastify,
  siPython,
  siMongodb,
  siSqlite,
  siGooglecloud,
  siFirebase,
  siN8n,
} from "simple-icons";

const techStackItem: TechStackItem[] = [
  // Frontend
  {
    alt: "React",
    image: reactImage.src,
    url: "https://react.dev/",
    label: "React",
  },
  {
    alt: "Next.js",
    path: siNextdotjs.path,
    url: "https://nextjs.org/",
    label: "Next.js",
  },
  {
    alt: "Vue.js",
    path: siVuedotjs.path,
    url: "https://vuejs.org/",
    label: "Vue.js",
  },
  {
    alt: "TypeScript",
    path: siTypescript.path,
    url: "https://www.typescriptlang.org/",
    label: "TypeScript",
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
    alt: "Astro",
    image: astroImage.src,
    url: "https://astro.build/",
    label: "Astro",
  },
  // Backend
  {
    alt: "Node.js",
    image: nodeImage.src,
    url: "https://nodejs.org/en",
    label: "Node.js",
  },
  {
    alt: "Laravel",
    image: laravelImage.src,
    url: "https://laravel.com/",
    label: "Laravel",
  },
  {
    alt: "Express",
    path: siExpress.path,
    url: "https://expressjs.com/",
    label: "Express",
  },
  {
    alt: "Fastify",
    path: siFastify.path,
    url: "https://fastify.dev/",
    label: "Fastify",
  },
  {
    alt: "Python",
    path: siPython.path,
    url: "https://www.python.org/",
    label: "Python",
  },
  // Databases
  {
    alt: "Postgresql",
    image: psgImage.src,
    url: "https://www.postgresql.org/",
    label: "Postgresql",
  },
  {
    alt: "MongoDB",
    path: siMongodb.path,
    url: "https://www.mongodb.com/",
    label: "MongoDB",
  },
  {
    alt: "SQLite",
    path: siSqlite.path,
    url: "https://sqlite.org/",
    label: "SQLite",
  },
  // Cloud
  {
    alt: "Amazon Web Services",
    image: awsImage.src,
    url: "https://aws.amazon.com/",
    label: "AWS",
  },
  {
    alt: "Google Cloud",
    path: siGooglecloud.path,
    url: "https://cloud.google.com/",
    label: "Google Cloud",
  },
  {
    alt: "Firebase",
    path: siFirebase.path,
    url: "https://firebase.google.com/",
    label: "Firebase",
  },
  // DevOps / Infrastructure
  {
    alt: "Docker",
    image: dockerImage.src,
    url: "https://www.docker.com/",
    label: "Docker",
  },
  {
    alt: "Dokploy",
    image: dokployImage.src,
    url: "https://dokploy.com/",
    label: "Dokploy",
  },
  {
    alt: "n8n",
    path: siN8n.path,
    url: "https://n8n.io/",
    label: "n8n",
  },
  // Mobile
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

      <div className="mx-auto grid max-w-4xl grid-cols-4 gap-2 sm:grid-cols-6">
        {techStackItem.map((techStackItem) => (
          <TechStackItem key={techStackItem.label} {...techStackItem} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
