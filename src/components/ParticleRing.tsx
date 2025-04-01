import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils";

const ParticleRing = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-30, 0, -30]} intensity={0.5} />
        <PointCircle />
        <OrbitControls maxDistance={20} minDistance={10} enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

interface PointProps {
  position: [number, number, number];
  color: string;
}

const Point: React.FC<PointProps> = ({ position, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.1, 10, 10]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        toneMapped={false}
      />
    </mesh>
  );
};

export default ParticleRing;
