import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import BancoModelo from '../components/BancoModelo'
import { OrbitControls } from '@react-three/drei'

function Scene2() {
  return (
    <Canvas id='banco_fondo'  camera={{ position: [0, 0, 5], fov:60}} >
        <ambientLight  intensity={5} />
        <Suspense fallback={null} >
          <BancoModelo />
            
        </Suspense>
        <OrbitControls />
      
    </Canvas>
  )
}

export default Scene2
