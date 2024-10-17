import { useRef, useEffect, useState } from "react";
import propTypes from "prop-types";
import { motion } from "framer-motion";

const steps = [
  { id: 1, text: "Step 1: Understanding the basics" },
  { id: 2, text: "Step 2: Setting up the environment" },
  { id: 3, text: "Step 3: Writing your first code" },
  { id: 4, text: "Step 4: Testing and debugging" },
  { id: 5, text: "Step 5: Deployment" },
];

const Step = ({ step, activeStep, index, progress }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      } dark:text-white`}
    >
      <div className="w-full md:w-40 text-center">
        <div className="p-4 bg-gray-200 rounded-md shadow-md dark:bg-gray-800">
          {step.text}
        </div>
      </div>
      <div className="flex flex-col items-center px-4">
        <div
          className={`flex items-center justify-center w-16 h-16 rounded-full border-[16px] md:border-[22px] transition duration-300 ${
            activeStep >= index ? "border-black" : "border-neutral-300"
          } ${
            activeStep >= index
              ? "dark:border-neutral-300"
              : "dark:border-gray-800"
          }`}
        ></div>
        {index !== steps.length - 1 && (
          <div className="relative w-0.5 h-10 md:h-20 bg-neutral-300 dark:bg-gray-800">
            <div
              className="absolute top-0 w-full bg-black dark:bg-white"
              style={{ height: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
      <div className="w-full md:w-40"></div>
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
    <div className="flex justify-center px-4">
      <div className="flex flex-col w-full max-w-md">
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
      <div className="flex mt-20 mb-12 justify-center px-4 text-center dark:text-white">
        <div className="text-3xl md:text-7xl relative">
          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            How Things Work
          </motion.div>
          <motion.div
            className="absolute left-1/2 md:left-80 top-[-50px] md:top-[-100px] transform -translate-x-1/2"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 0.5 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            <img
              src="setting.png"
              width={128}
              height={128}
              className="w-32 md:w-64 dark:opacity-75 dark:brightness-125"
              alt="setting"
            />
          </motion.div>
        </div>
      </div>

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
