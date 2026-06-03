import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Motorcycle from "./Motorcycle";
import Lights from "./Lights";

/*
 *  Scene — wrapper del canvas R3F
 *
 *  • shadows: true   — sombras para profundidad
 *  • toneMapping 3   — ACESFilmic, el estándar cinematográfico
 *  • toneMappingExposure 1.15 — ligera sobreexposición dramática
 *  • far: 80         — ampliado para cuando la moto se aleja en Z
 *  • La cámara empieza en la misma posición que el keyframe 0 del hook
 */
export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.0, 10], fov: 40, near: 0.05, far: 80 }}
      gl={{
        antialias: true,
        alpha: false,
        toneMapping: 3,
        toneMappingExposure: 1.15,
        powerPreference: "high-performance",
      }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#050505"]} />
      {/* Fog ampliado: la moto puede alejarse hasta z=-3 sin desaparecer */}
      <fog attach="fog" args={["#0a0a0a", 25, 60]} />

      <Lights />

      <Suspense fallback={null}>
        <Motorcycle />
      </Suspense>
    </Canvas>
  );
}
