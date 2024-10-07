import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html className="loader-container">
      <span className='canvas-loader'></span>
      <p className="loader-progress">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;