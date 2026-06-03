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
    /*
     * groupRef recibe TODOS los tweens de scroll (position, rotation, scale).
     * El group interior solo centra el modelo visualmente (offset fijo).
     * Esto evita que el pivot incorrecto distorsione las rotaciones.
     */
    <group ref={groupRef}>
      <group position={[0, -1.3, 0]} scale={1.4}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/honda-shadow.glb");
