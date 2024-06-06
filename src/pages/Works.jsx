import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/codelab.png",
    techStack: [
      "React",
      "NodeJs",
      "Shadcn",
      "Typescript",
      "Express",
      "Redis",
      "Tailwindcss",
    ],
    title: "Codelab",
    description: "A real time code collaboration web application",
    live: "https://codelab-1.onrender.com/",
    github: "https://github.com/Aniket897/codelab",
  },
  {
    image: "/jiomart.png",
    techStack: ["React", "Tailwindcss"],
    title: "JioMart Clone",
    description:
      "Jiomart is a e-commerce website where constmer get varity of products",
    live: "https://jiomart-clone-eosin.vercel.app/",
    github: "https://github.com/Aniket897/jiomart-clone",
  },
  {
    image: "/pixelhero.png",
    techStack: ["React", "Firebase", "Tailwindcss"],
    title: "PixelHero",
    description:
      "pixel hero is web app which is usefull for searching and downloading images",
    live: "https://pixel-hero.vercel.app/",
    github: "https://github.com/Aniket897/PixelHero",
  },
  {
    image: "/event-prime.png",
    techStack: ["REACT", "ExpressJs", "MongoDb", "NodeJs", "Stripe"],
    title: "Event-Prime clone",
    description:
      "event prime is a platform where companies can host events and sell tickets to customer",
    live: "https://event-prime-clone.vercel.app/",
    github: "https://github.com/Aniket897/event-prime-clone",
  },
  {
    image: "/halloween-shop.png",
    techStack: ["REACT", "TailwindCSS", "Readux-toolkit"],
    title: "halloween-shop clone",
    description:
      "halloween shop is a ecommerce website where cusomer get products related to halloween",
    live: "https://halloween-shop-clone.vercel.app/",
    github: "https://github.com/Aniket897/halloween-shop-clone",
  },
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/655640d339b93419b086ce8d/screenshot_2023-11-16-16-18-55-0000.png",
    techStack: ["HTML", "CSS"],
    title: "bewkoof.com clone",
    description: "bewkoof.com is a ecommerce website.",
    live: "https://joyful-truffle-91c4b3.netlify.app/",
    github: "https://github.com/Aniket897/bewakoof.com-clone",
  },
];

const Works = () => {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="mt-[100px]"
      >
        <Nav title={"Works"} des="my all works" />
        <div className="w-[90vw] md:w-[70vw] mx-auto grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[50px] md:gap-3 mt-[50px]">
          {projects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Works;
