import Button from "../ui/button";
import RocketCanvas from "./canvas/Rocket";

const Main = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col items-center px-4 dark:text-white ">
                <div className="mt-20 mb-7 text-center text-3xl md:text-4xl uppercase leading-snug">
                    Building the future of your brand <br />
                    From development to deployment, we turn your ideas into reality, guaranteed
                </div>
                <Button className="dark:bg-gray-800" text="Book a call" onClick={() => { }} />
            </div>

            {/* Rocket Section */}
            <div className="flex justify-center mt-10 dark:text-white">
                <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[radial-gradient(closest-side,_rgba(0,0,0,0.5),_rgba(255,255,255,1))] relative">
                    <img src="circle-withoutBG.png" alt="Background Circle" className="absolute left-[-50px] sm:left-[-100px] w-[300px] sm:w-[500px] md:w-[700px]" />
                    <div className="absolute w-[200px] h-[300px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] right-[-50px] sm:right-[-100px] md:right-[-150px]">
                        <RocketCanvas />
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col mx-6 sm:mx-12 md:mx-24 mt-12 md:mt-24 dark:text-white">
                <div className="text-xs sm:text-sm mb-2">
                    <ul className="list-disc list-inside">
                        <li>Who are we?</li>
                    </ul>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-right leading-relaxed">
                    We are committed to solving your business challenges with expert solutions in website development, app development, custom software, and MVP development. We believe in building strong relationships and using our industry knowledge to create tailored solutions that drive success.
                </div>
                <div className="text-xs sm:text-sm text-right mt-4">
                    <ul className="list-disc list-inside">
                        <li>Meet the team</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Main;
