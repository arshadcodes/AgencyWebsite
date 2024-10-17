import Button from "../ui/button";
import { motion } from "framer-motion";

const projects = [
  { name: "Project 1", image: "bw.webp" },
  { name: "Project 2", image: "bw.webp" },
  { name: "Project 3", image: "bw.webp" },
  { name: "Project 4", image: "bw.webp" },
  { name: "Project 5", image: "bw.webp" },
  { name: "Project 6", image: "bw.webp" },
  { name: "Project 7", image: "bw.webp" },
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
    <div className="flex flex-col items-center justify-center mt-16 md:mt-36 dark:text-white">
      {/* Title and Floating Rocket */}
      <div className="text-4xl md:text-7xl relative text-center">
        Our Work
        <motion.img
          variants={rocketVariants}
          initial="initial"
          animate="animate"
          src="rocket.png"
          alt="rocket"
          className="absolute w-24 md:w-48 top-[-50px] md:top-[-100px] left-1/2 transform -translate-x-1/2 z-[-1]"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-20 lg:mx-40 mt-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={project.image}
              alt={project.name}
              className="w-full md:w-64 object-cover"
            />
            <p className="text-base md:text-lg mt-4">{project.name}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <Button
        className="my-10 md:my-16 dark:bg-gray-800"
        text="Book a call"
        onClick={() => {}}
      />
    </div>
  );
};

export default OurWork;
