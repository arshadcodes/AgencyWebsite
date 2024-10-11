import Button from "../ui/button";
import { motion } from "framer-motion";

const projects = [
  { name: "Project 1", image: "bw.webp" },
  { name: "Project 2", image: "bw.webp" },
  { name: "Project 3", image: "bw.webp" },
  { name: "Project 3", image: "bw.webp" },
  { name: "Project 3", image: "bw.webp" },
  { name: "Project 3", image: "bw.webp" },
  { name: "Project 3", image: "bw.webp" },
];

const rocketVariants = {
  initial: { y: 0 },
  animate: {
    y: [-50, 50],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
};

const OurWork = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-36 dark:text-white">
      <div className="text-7xl relative">
        Our Work
        <img
          src="rocket.png"
          alt="rocket"
          className="absolute w-48 top-[-100px] left-36 z-[-1]"
        />
      </div>
      <div className="mx-60 mt-10 space-y-4">
        <div className="flex justify-center space-x-14">
          {projects.slice(0, 2).map((project, index) => (
            <div key={index} className="flex flex-col">
              <img src={project.image} alt={project.name} className="w-64" />
              <p className="text-lg">{project.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-14">
          {projects.slice(2, 5).map((project, index) => (
            <div key={index} className="flex flex-col">
              <img src={project.image} alt={project.name} className="w-64" />
              <p className="text-lg">{project.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-14">
          {projects.slice(5, 7).map((project, index) => (
            <div key={index} className="flex flex-col">
              <img src={project.image} alt={project.name} className="w-64" />
              <p className="text-lg">{project.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="my-16 dark:bg-gray-800"
        text="Book a call"
        onClick={() => {}}
      />
    </div>
  );
};

export default OurWork;
