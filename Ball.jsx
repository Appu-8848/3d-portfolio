import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { IcosahedronBufferGeometry, MeshStandardMaterial } from 'three';
import { Mesh, Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <Mesh castShadow receiveShadow scale={2.75}>
        <IcosahedronBufferGeometry args={[1, 1]} />
        <MeshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />

        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
      </Mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

