import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Motorcycle() {
  const groupRef = useRef();

  const { scene } = useGLTF("/models/honda-shadow.glb");

  const camera = useThree((state) => state.camera);

  useScrollAnimation(groupRef, camera);

  return (
    <group ref={groupRef}>
      <primitive object={scene} position={[0, -1.3, 0]} scale={1.4} />
    </group>
  );
}

useGLTF.preload("/models/honda-shadow.glb");
