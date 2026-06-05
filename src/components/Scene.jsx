import { Canvas } from "@react-three/fiber";
import MacBook from "./MacBook";
import Lights from "./Lights";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5.0],
        fov: 50,
      }}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={["#000000"]} />
      <Lights />
      <MacBook />
    </Canvas>
  );
}
