import Button from "../ui/button";
import RocketCanvas from "./canvas/Rocket";

const Main = () => {

    return (
        <>
            <div className="flex flex-col items-center dark:text-white">
                <div className="mt-32 mb-7 text-4xl text-center uppercase ">
                    Building the future of your brand <br />
                    From development to deployment, we turn your ideas into reality, guaranteed
                </div>
                <Button className="dark:bg-gray-800 hover:bg-gray-700 hover:scale-105 transition-transform duration-300" text="Book a call" onClick={() => { }} />
            </div>

            <div className="flex justify-center mt-10 dark:text-white">
                <div className="w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,_rgba(0,0,0,0.5),_rgba(255,255,255,1))] relative">
                    <img src="circle-withoutBG.png" alt="text" className="absolute left-[-100px] w-[700px]" />
                    <div className="absolute w-[500px] h-[600px] right-[-150px]">
                        <RocketCanvas />
                    </div>
                </div>
            </div>

            <div className="flex flex-col mx-24 mt-24 dark:text-white">
                <div className="text-sm">
                    <ul className="list-disc list-inside">
                        <li>Who are we?</li>
                    </ul>
                </div>
                <div className="text-2xl text-right">
                    We are committed to solving your business challenges with expert solutions in website development, app development, custom software, and MVP development. We believe in building strong relationships and using our industry knowledge to create tailored solutions that drive success
                </div>
                <div className="text-sm text-right">
                    <ul className="list-disc list-inside">
                        <li>Meet the team</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Main;
