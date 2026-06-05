import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function MacBook() {
  const groupRef = useRef();
  const { scene } = useGLTF("/models/apple_macbook_pro.glb");
  const camera = useThree((state) => state.camera);

  useScrollAnimation(groupRef, camera);

  return (
    <group ref={groupRef}>
      <primitive object={scene} position={[0, -0.3, 0]} scale={5.8} />
    </group>
  );
}

useGLTF.preload("/models/apple_macbook_pro.glb");
