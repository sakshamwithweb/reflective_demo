import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Ground } from './components/Ground';
import { Light } from './components/Light';
import { Robot } from './components/Robot';
import { FbxModel } from './components/FbxModel';

function App() {
  return (
    <div className='main'>
      <Canvas camera={{ position: [0, 2, 2] }} gl={{ antialias: true }} >
        <color attach={'background'} args={["black"]} />
        <Light color={"hotpink"} intensity={20} position={[5, 5, 0]} />
        <Light color={"white"} intensity={40} position={[0, 5, 2]} />
        <ambientLight intensity={5} />
        {/* <Robot /> */}
        <FbxModel />
        <Ground />
        {/* <OrbitControls enableDamping enableZoom={false} enablePan={false} maxPolarAngle={(Math.PI * 0.5) - 0.1} /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
