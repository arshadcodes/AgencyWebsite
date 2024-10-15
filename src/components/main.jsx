import Button from "../ui/button";
import RocketCanvas from "./canvas/Rocket";

const Main = () => {
  return (
    <>
      
      <div className="flex flex-col items-center px-2 sm:px-4 md:px-8 dark:text-white">
        <div className="mt-24 mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase">
          Building the future of your brand <br />
          From development to deployment, we turn your ideas into reality, guaranteed
        </div>
        <Button className="dark:bg-gray-800" text="Book a call" onClick={() => { }} />
      </div>

      
      <div className="flex justify-center mt-8 dark:text-white">
        <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[radial-gradient(closest-side,_rgba(0,0,0,0.5),_rgba(255,255,255,1))]">
          <img 
            src="circle-withoutBG.png" 
            alt="circle-background" 
            className="absolute left-[-30px] w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]" 
          />
          <div className="absolute w-[120px] h-[160px] right-[-30px] sm:w-[150px] sm:h-[200px] md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[400px]">
            <RocketCanvas />
          </div>
        </div>
      </div>

     
      <div className="flex flex-col mx-2 sm:mx-6 md:mx-12 mt-10 md:mt-16 dark:text-white">
        <div className="text-xs md:text-sm">
          <ul className="list-disc list-inside">
            <li>Who are we?</li>
          </ul>
        </div>
        <div className="mt-2 text-md sm:text-lg md:text-xl lg:text-2xl text-right">
          We are committed to solving your business challenges with expert solutions in website development, app development, custom software, and MVP development. We believe in building strong relationships and using our industry knowledge to create tailored solutions that drive success.
        </div>
        <div className="mt-2 text-xs md:text-sm text-right">
          <ul className="list-disc list-inside">
            <li>Meet the team</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
