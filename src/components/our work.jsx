import Button from "../ui/button";

const projects = [
  { name: "Project 1", image: "bw.webp" },
  { name: "Project 2", image: "bw.webp" },
  { name: "Project 3", image: "bw.webp" },
  { name: "Project 4", image: "bw.webp" },
  { name: "Project 5", image: "bw.webp" },
  { name: "Project 6", image: "bw.webp" },
  { name: "Project 7", image: "bw.webp" },
];

const ProjectGrid = ({ projects }) => {
  return (
    <div className="space-y-4">
      {[0, 2, 5].map((startIndex, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8">
          {projects.slice(startIndex, startIndex + (rowIndex === 0 ? 2 : 3)).map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={project.image} alt={project.name} className="w-32 sm:w-40 md:w-64" />
              <p className="text-xs sm:text-sm md:text-lg text-center">{project.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const OurWork = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-36 dark:text-white">
      <div className="text-3xl sm:text-4xl md:text-7xl relative text-center">
        Our Work
        <img
          src="rocket.png"
          alt="rocket"
          className="absolute w-24 sm:w-32 md:w-48 top-[-40px] sm:top-[-60px] md:top-[-100px] left-1/2 transform -translate-x-1/2 z-[-1]"
        />
      </div>
      <div className="mx-2 sm:mx-4 md:mx-60 mt-2 sm:mt-4 md:mt-10">
        <ProjectGrid projects={projects} />
      </div>
      <Button className="my-6 sm:my-8 md:my-16 dark:bg-gray-800" text="Book a call" onClick={() => { }} />
    </div>
  );
};

export default OurWork;
