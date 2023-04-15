import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";
import { Canvas } from "@react-three/fiber";
interface BallProps {
  imageUrl: string;
}
const Ball: React.FC<BallProps> = ({ imageUrl }) => {
  const [decal] = useTexture([imageUrl]);
  const dummyObj = {};
  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
      {...(dummyObj as any)}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow recieveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          position={[0, 0, 1]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<any> = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imageUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
