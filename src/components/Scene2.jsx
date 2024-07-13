import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import BancoModelo from '../components/BancoModelo';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Scene2() {
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: rightRef, inView: rightInView } = useInView();
  const { ref: titleRef, inView: titleInView } = useInView();

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <motion.h1
        ref={titleRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: titleInView ? 0 : 100, opacity: titleInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '20px' }}
      >
        ¿Soy Skater?
      </motion.h1>

      <motion.div 
        ref={leftRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: leftInView ? 0 : 100, opacity: leftInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', width: '20%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}
      >
       
      </motion.div>

      <Canvas className='banco_fondo' camera={{ position: [0, 0, 10], fov: 60 }} style={{ flex: 1, width: '100%' }}>
        <ambientLight intensity={5} />
        <Suspense fallback={null}>
          <BancoModelo position={[0, -5, -5]} rotation={[0, Math.PI / 2, 0]} scale={[3, 3, 3]} />
        </Suspense>
        
      </Canvas>

      <motion.div
        ref={rightRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: rightInView ? 0 : 100, opacity: rightInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', width: '20%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}
      >
       <p>
          Patinando desde los 90s. <br/> 
          Aquí nos fascina la escena y cultura del patín, <br/> por eso nos decidimos a abrir ....
        </p>
      </motion.div>
    </div>
  );
}

export default Scene2;
