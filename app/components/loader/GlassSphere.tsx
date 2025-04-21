import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GlassSphereObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#a78bfa"
        attach="material"
        distort={0.3}
        speed={3}
        roughness={0.1}
        metalness={0.8}
        transmission={0.9}
        opacity={0.8}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </Sphere>
  );
}

export default function GlassSphere() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 w-full h-full flex items-center justify-center z-50 bg-gradient-to-tr from-[#0a0118] to-[#0c1e24]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-64 h-64 sm:w-96 sm:h-96 relative"
      >
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={2} 
            castShadow 
          />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <GlassSphereObject />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-20 text-white text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gradient text-lg font-medium"
          >
            Loading...
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
} 