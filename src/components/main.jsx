import Button from "../ui/button";
import RocketCanvas from "./canvas/Rocket";
import { InView } from "react-intersection-observer";

import "./anim/main.css";

const Main = () => {
  return (
    <>
      <div className="flex flex-col items-center dark:text-white">
        <div className="mt-32 mb-7 text-4xl text-center uppercase ">
          Building the future of your brand <br />
          From development to deployment, we turn your ideas into reality,
          guaranteed
        </div>
        <Button
          className="dark:bg-gray-800"
          text="Book a call"
          onClick={() => {}}
        />
      </div>

      <div className="flex justify-center mt-10 dark:text-white">
        <div className="w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,_rgba(0,0,0,0.5),_rgba(255,255,255,1))] relative grid grid-rows-[1fr] auto-cols-[1]">
          <img
            src="circle-withoutBG.png"
            alt="text"
            className="[aspect-ratio:1] w-full place-self-center"
            id="main-circle-img-anim"
          />
          <div className="absolute w-[500px] h-[600px] right-[-150px]">
            <RocketCanvas />
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-24 mt-24 dark:text-white overflow-x-hidden">
        <div className="text-sm">
          <ul className="list-disc list-inside">
            <InView rootMargin="-150px" triggerOnce={true}>
              {({ inView, ref, entry }) => (
                <li className={`whoarewe${inView ? " visible" : ""}`} ref={ref}>
                  Who are we?
                </li>
              )}
            </InView>
          </ul>
        </div>
        <InView rootMargin="-150px" triggerOnce={true}>
          {({ inView, ref, entry }) => (
            <div
              className={`text-2xl text-right whoarewedesc${
                inView ? " visible" : ""
              }`}
              ref={ref}
            >
              We are committed to solving your business challenges with expert
              solutions in website development, app development, custom
              software, and MVP development. We believe in building strong
              relationships and using our industry knowledge to create tailored
              solutions that drive success
            </div>
          )}
        </InView>
        <div className="text-sm text-right">
          <ul className="list-disc list-inside">
            <InView rootMargin="-150px" triggerOnce={true}>
              {({ inView, ref, entry }) => (
                <li
                  className={`meettheteam${inView ? " visible" : ""}`}
                  ref={ref}
                >
                  Meet the team
                </li>
              )}
            </InView>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
