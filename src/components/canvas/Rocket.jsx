import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useRef } from "react";

import CanvasLoader from "../Loader";

const Rocket = () => {
  const rocket = useGLTF("/rocket/untitled.gltf");

  // Reference to the rocket model for rotation
  const rocketRef = useRef();

  // useFrame hook to rotate the rocket on its Y-axis
  useFrame(() => {
    if (rocketRef.current) {
      rocketRef.current.rotation.y += 0.001; // Adjust the speed of rotation here
    }
  });

  return (
    <mesh>
<hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3}/>
    <primitive ref={rocketRef} object={rocket.scene} scale={0.02} position={[1, 0.2, -2]} rotation={[0,0, Math.PI / 2]}/>
    </mesh>
    
    // Attaching the ref to the primitive object to enable rotation
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
        position: [0, 1, 10], // Adjusted to move further back
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          // autoRotateSpeed={0.5} // Speed of the orbit controls auto-rotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // Adjusted for better view control
          minPolarAngle={0} // Allow full rotation
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
