import { Canvas } from "@react-three/fiber";
import Motorcycle from "./Motorcycle";
import Lights from "./Lights";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 1, 7],
        fov: 40,
      }}
    >
      <color attach="background" args={["#0a0a0a"]} />
      <Lights />
      <Motorcycle />
    </Canvas>
  );
}
