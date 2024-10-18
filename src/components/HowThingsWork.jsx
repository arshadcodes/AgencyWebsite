import { useRef, useEffect, useState } from "react";
import propTypes from "prop-types";

import { InView } from "react-intersection-observer";
import "./anim/how-things-work.css";

const steps = [
  { id: 1, text: "Step 1: Understanding the basics" },
  { id: 2, text: "Step 2: Setting up the environment" },
  { id: 3, text: "Step 3: Writing your first code" },
  { id: 4, text: "Step 4: Testing and debugging" },
  { id: 5, text: "Step 5: Deployment" },
];

const Step = ({ step, index }) => {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      } dark:text-white`}
    >
      <div className="w-40 text-center">
        <InView rootMargin="-80px" triggerOnce={false}>
          {({ inView, ref, entry }) => (
            <div
              className={`p-4 bg-gray-200 rounded-md shadow-md dark:bg-gray-800 step-text${
                index % 2 == 0 ? " step-right" : " step-left"
              }${inView ? " visible" : ""}`}
              ref={ref}
            >
              {step.text}
            </div>
          )}
        </InView>
      </div>
      <div className="flex flex-col items-center px-4">
        <InView rootMargin="-80px" triggerOnce={false} sk>
          {({ inView, ref, entry }) => (
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full border-[22px] 
                  transition duration-300 ${
                    inView ? "border-black" : "border-neutral-300"
                  }
                  ${inView ? "dark:border-neutral-300" : "dark:border-gray-800"}
                  
                `}
              ref={ref}
            ></div>
          )}
        </InView>
        {index !== steps.length - 1 && (
          <div className="relative w-0.5 h-20 bg-transparent">
            <div className="absolute top-0 w-full bg-black dark:bg-white progress-bar"></div>
          </div>
        )}
      </div>
      <div className="w-40"></div>
    </div>
  );
};

const ScrollStepper = () => {
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(-1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      stepRefs.current.forEach((ref, index) => {
        if (ref.offsetTop <= scrollPosition) {
          setActiveStep(index);
          const nextStep = stepRefs.current[index + 1];
          if (nextStep) {
            const totalHeight = nextStep.offsetTop - ref.offsetTop;
            const scrolledHeight = scrollPosition - ref.offsetTop;
            setProgress((scrolledHeight / totalHeight) * 100);
          } else {
            setProgress(100);
          }
        } else if (index === 0) {
          setActiveStep(-1);
          setProgress(0);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {steps.map((step, index) => (
          <div key={step.id} ref={(el) => (stepRefs.current[index] = el)}>
            <Step
              step={step}
              activeStep={activeStep}
              index={index}
              progress={
                activeStep === index ? progress : activeStep > index ? 100 : 0
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const HowThingsWork = () => {
  return (
    <>
      <InView rootMargin="-150px" triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div
            className={`flex mt-36 mb-24 justify-center dark:text-white`}
            ref={ref}
          >
            <div
              className={`text-7xl relative pr-24 howthingswork-title${
                inView ? " visible" : ""
              }`}
              ref={ref}
            >
              <div className="relative z-8">How Things Work</div>
              <img
                src="setting.png"
                className="absolute left-80 top-[-100px] w-64 dark:opacity-75 dark:brightness-125 z-[-1] select-none"
                alt="setting"
                draggable={false}
              />
            </div>
          </div>
        )}
      </InView>

      <ScrollStepper />
    </>
  );
};

Step.propTypes = {
  step: propTypes.object.isRequired,
  activeStep: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
  progress: propTypes.number.isRequired,
};

export default HowThingsWork;
