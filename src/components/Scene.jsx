import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Skate } from './SkateModel'
import { OrbitControls } from '@react-three/drei'

function Scene() {
  return (
    <Canvas  camera={{ position: [0, 0, 85], fov:60}}>
        <ambientLight intensity={5} />
       
        
        <Suspense fallback={null}>
            <Skate  />
        </Suspense>
        
        <OrbitControls 
        enableZoom={false}
            
           
        />
    </Canvas>
  )
}

export default Scene
