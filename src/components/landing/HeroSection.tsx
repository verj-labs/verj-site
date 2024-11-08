"use client";

// src/components/HeroSection.js
import React, { Suspense, useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls, Reflector, Sparkles } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three-stdlib";
import { Bloom, EffectComposer, GodRays, Pixelation } from "@react-three/postprocessing";

import { BlendFunction, Resizer, KernelSize } from "postprocessing";

function LogoModel() {
  const stl = useLoader(STLLoader, "/logo.stl");
  const modelRef = useRef();
  const sparklesRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Rotate model based on mouse position (inverted movement)
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = -mouse.x * 0.3; // Adjust for slower rotation
      modelRef.current.rotation.x = mouse.y * 0.3;
    }
    if (sparklesRef.current) {
      sparklesRef.current.rotation.y = -mouse.x * 0.01;
      sparklesRef.current.rotation.x = mouse.y * 0.01;
    }
  });

  return (
    <>
      <mesh
        ref={modelRef}
        geometry={stl}
        scale={3}
      >
        <meshPhysicalMaterial
          color="#FFFBFE"
          metalness={0.2} // Increase for more metallic look
          roughness={0.9} // Decrease for more shine
          clearcoat={0.1} // Adds a reflective clear coat
          clearcoatRoughness={0.9}
          emissive="#7fd1B9"
          emissiveIntensity={0.2}
        />
      </mesh>
      <Sparkles
        ref={sparklesRef}
        count={30}
        scale={[15, 4, 8]}
        opacity={0.5}
        size={1}
        speed={2}
        noise={2}
        color={"#FFBFE"}
      />
    </>
  );
}

function ReflectiveGround() {
  return (
    <Reflector
      position={[0, -3, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      args={[100, 100]}
      resolution={512}
      mirror={0.8} // Reflectiveness
      mixBlur={1} // Softness of reflection
      mixStrength={0.8} // Reflection strength
    >
      {(Material, props) => (
        <Material
          color="#555"
          {...props}
        />
      )}
    </Reflector>
  );
}

export default function HeroSection() {
  // const { gl, camera } = useThree();
  const sunRef = useRef();

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center bg-gradient-to-b from-[#202020] via-[#2F4858] to-[#2F4858]">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        className="z-20"
      >
        <ambientLight intensity={0.8} />
        <spotLight
          position={[5, 5, 10]}
          intensity={1}
        />
        <pointLight
          position={[-5, -5, -5]}
          intensity={0.5}
        />

        <mesh
          ref={sunRef}
          position={[0, 10, -10]}
        >
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshBasicMaterial color="white" />
        </mesh>

        <Suspense fallback={null}>
          <LogoModel />
        </Suspense>

        <EffectComposer multisampling={0}>
          <Bloom
            intensity={2}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
          />

          {sunRef.current && (
            <GodRays
              sun={sunRef}
              blendFunction={BlendFunction.Screen}
              samples={60}
              density={0.96}
              decay={0.9}
              weight={0.4}
              exposure={0.6}
              clampMax={1}
              width={Resizer.AUTO_SIZE}
              height={Resizer.AUTO_SIZE}
              kernelSize={KernelSize.SMALL}
              blur={true}
            />
          )}

          {/* <Pixelation
            granularity={5} // pixel granularity
          /> */}
        </EffectComposer>

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute text-white text-center px-16 top-0 left-0 w-full h-full flex flex-col items-start justify-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Verj Labs</h1>
        <p className="text-lg">Innovative Software Solutions for Your Business</p>
      </div>
    </section>
  );
}
