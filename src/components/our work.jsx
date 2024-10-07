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

const OurWork = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-36 dark:text-white">
            <div className="text-7xl relative text-center">
                Our Work
                <img src="rocket.png" alt="rocket" className="absolute w-48 top-[-100px] left-1/2 transform -translate-x-1/2 z-[-1]" />
            </div>
            <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-60 mt-10 space-y-8">
                {/* Using a grid layout for better responsiveness */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-64 h-64 object-cover rounded-lg"
                            />
                            <p className="text-lg mt-2 text-center">{project.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Button className="my-16 dark:bg-gray-800" text="Book a call" onClick={() => { }} />
        </div>
    );
};

export default OurWork;
