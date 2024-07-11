import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export function Skate(props) {
  const groupRef = useRef()
  
  const { nodes, materials } = useGLTF('/modelDraco.gltf', loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/path/to/draco/') // Asegúrate de que este es el camino correcto a los decoders de Draco
    loader.setDRACOLoader(dracoLoader)
  })

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (2 * Math.PI) / 6 * delta // 360 degrees over 6 seconds
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skate_Deck_RAW004_ONEMAT_0.geometry}
        material={materials.ONEMAT}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/modelDraco.gltf', loader => {
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('/path/to/draco/') // Asegúrate de que este es el camino correcto a los decoders de Draco
  loader.setDRACOLoader(dracoLoader)
})
