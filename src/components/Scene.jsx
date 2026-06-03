import { Canvas } from "@react-three/fiber";
import Motorcycle from "./Motorcycle";
import Lights from "./Lights";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 9], fov: 38 }}
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 18, 35]} />
      <Lights />
      <Motorcycle />
    </Canvas>
  );
}
