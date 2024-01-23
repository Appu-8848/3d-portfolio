// import {Suspense, useEffect, useState} from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Computers = () => {
//   const computer=useGLTF('./game/scene.gltf')


//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15}
//       groundColor="black" />
//       <pointLight intensity={1}/>
//       <spotLight
//       position={[-20,50,10]}
//       angle={0.12}
//       penumbra={1}
//       intensity={1}
//       castShadow
//       shadow-mapSize={1024}
//       />
//       <primitive 
//       object={computer.scene}
//       scale={0.75}
//       position={[0,-3.25,-1.5]}
//       rotation={[-0.01,-0.2,0.1]}
//       />
//     </mesh>
// )
// }

// const ComputersCanvas = () => {
//   return(
//     <Canvas
//     frameloop="demand"
//     shadows
//     camera={{position:[20,3,5],fov:25}}
//     gl= {{ preserveDrawingBuffer:true }}
//     >

//       <Suspense fallback={<CanvasLoader/>}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI/2}
//           minPolarAngle={Math.PI/2}
//         />
//         <Computers/>
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }

// export default Computers;


// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const ComputerModel = () => {
//   const { scene } = useGLTF('./game/scene.gltf'); // Replace with the correct path to your GLTF model

//   return <primitive object={scene} scale={0.8} position={[0, -4.2, -1.5]} rotation={[-0.01, -0.2, 0.1]} />;
// };

// const ComputersCanvas = () => {
//   return (
//     <Canvas frameloop="demand" camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={null}>
//         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//         <ambientLight intensity={0.5} />
//         <pointLight intensity={1} position={[10, 10, 10]} />
//         <ComputerModel />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ComputersCanvas;


// import React, { Suspense, useEffect, useState } from 'react';
// import { Canvas, events } from '@react-three/fiber';
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const ComputerModel = (isMobile) => {
//   const { scene } = useGLTF('./game/scene.gltf'); // Replace with the correct path to your GLTF model

//   return <primitive object={scene} scale={0.8} position={[0, -4.2, -1.5]} rotation={[-0.01, -0.2, 0.1]} />;
// };

// const ComputersCanvas = () => {

//   const[isMobile,setIsMobile]=useState(false);

//   useEffect(() => {

//     const mediaQuery = window.matchMedia('(max-width:500px');
//     setIsMobile(mediaQuery.matches);

//     const handleMediaqueryChange=(event)=>{
//       setIsMobile(event.matches);
//     }

//     mediaQuery.addEventListener('change', handleMediaqueryChange);

//     return () =>{mediaQuery.addEventListener('change', handleMediaqueryChange);}
//   },[])


//   return (
//     <Canvas frameloop="demand" camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//         <ambientLight intensity={0.5} />
//         <pointLight intensity={1} position={[10, 10, 10]} />
//         <ComputerModel />
//       </Suspense>
//       <ComputerModel isMobile={isMobile} />
//       <Preload all/>
//     </Canvas>
//   );
// };

// export default ComputersCanvas;



import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, events } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ComputerModel = () => {
  const { scene } = useGLTF('./game/scene.gltf'); // Replace with the correct path to your GLTF model

  return (
    <Mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={0.75}
        position={[0, -3.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </Mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px');
    setIsMobile(mediaQuery.matches);

    const handleMediaqueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaqueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaqueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <ambientLight intensity={0.5} />
        <pointLight intensity={1} position={[10, 10, 10]} />
        <ComputerModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
