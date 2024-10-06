
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useRef } from "react";

import CanvasLoader from "../Loader";

const Rocket = () => {
  const rocket = useGLTF("/rocket/untitled.gltf");

  // Reference to the rocket model
  const rocketRef = useRef();

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3} />
      {/* Keeping the rocket centered, upright, and facing front */}
      <primitive
        ref={rocketRef}
        object={rocket.scene}
        scale={0.020} // Smaller scale for the rocket
        position={[-2,-0.5, -1]} // Centered on the X-axis
        rotation={[0,1.8, Math.PI / 2]} // Corrected rotation to ensure it stands straight facing front
      />
    </mesh>
  );
};

const RocketCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 400,
        position: [0, 1, 10], // Adjusted camera for full view
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls with disabled rotation */}
        <OrbitControls
          enableZoom={false}
          enableRotate={false} // Disables rotation
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
        {/* Adding lights to illuminate the scene */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Rocket />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default RocketCanvas;
