import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Ground } from './components/Ground';
import { Light } from './components/Light';
import { Robot } from './components/Robot';

function App() {
  return (
    <div className='main'>
      <Canvas camera={{ position: [0, 2, 2] }} gl={{ antialias: true }} >
        <color attach={'background'} args={["black"]} />
        <Light color={"hotpink"} intensity={20} position={[5, 5, 0]} />
        <Light color={"blue"} intensity={20} position={[-5, 5, 0]} />
        <Robot />
        <Ground />
        <OrbitControls enableDamping enableZoom={false} enablePan={false} maxPolarAngle={(Math.PI * 0.5) - 0.1} />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default App;
