import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/*
 *  Rig de iluminación dinámica
 *
 *  La luz sigue parcialmente a la moto cuando ésta se mueve
 *  por el espacio (el key light y el spot se ajustan levemente),
 *  de modo que nunca queda en sombra cuando sale de centro.
 */
export default function Lights() {
  const keyRef = useRef();
  const rimRef = useRef();
  const kickRef = useRef();
  const spotRef = useRef();

  useFrame(({ clock, scene }) => {
    const t = clock.getElapsedTime();

    /* Spot orbita lentamente — highlight móvil */
    if (spotRef.current) {
      spotRef.current.position.x = Math.sin(t * 0.14) * 6;
      spotRef.current.position.z = Math.cos(t * 0.14) * 4 + 3;
      spotRef.current.position.y = 5 + Math.sin(t * 0.07) * 1.2;
    }

    /* Red kicker — pulso orgánico */
    if (kickRef.current) {
      kickRef.current.intensity = 0.9 + Math.sin(t * 1.1) * 0.35;
    }

    /* Rim light color breathing — frío/neutro */
    if (rimRef.current) {
      const v = (Math.sin(t * 0.22) + 1) * 0.5;
      rimRef.current.color.lerpColors(
        new THREE.Color("#6a9fc0"),
        new THREE.Color("#b0cce0"),
        v,
      );
      rimRef.current.intensity = 1.6 + v * 0.6;
    }

    /* Key light — sigue levemente a la moto en X para no perderla */
    if (keyRef.current) {
      /* Busca el grupo de la moto en la escena */
      const moto = scene.getObjectByName?.("moto-group");
      if (moto) {
        keyRef.current.position.x = moto.position.x + 5;
        keyRef.current.position.y = moto.position.y + 7;
      }
    }
  });

  return (
    <>
      {/* Base fill — muy tenue, solo para que las sombras no sean puras */}
      <ambientLight intensity={0.2} color="#12101a" />

      {/* Key: cálida, fuerte, sombras nítidas */}
      <directionalLight
        ref={keyRef}
        position={[5, 7, 4]}
        intensity={3.5}
        color="#f5e8d0"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.5}
        shadow-camera-far={40}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Rim: azul frío, esculpe el contorno */}
      <directionalLight
        ref={rimRef}
        position={[-8, 2, -5]}
        intensity={1.6}
        color="#6a9fc0"
      />

      {/* Kicker: rojo rasante — calor de motor */}
      <pointLight
        ref={kickRef}
        position={[0.5, -1.5, 3.5]}
        intensity={0.9}
        color="#cc3800"
        distance={12}
        decay={2}
      />

      {/* Suelo: bounce cálido */}
      <pointLight
        position={[0, -3.5, 1]}
        intensity={0.65}
        color="#3d2008"
        distance={14}
        decay={2}
      />

      {/* Spot orbital — highlight especular que nunca se repite */}
      <spotLight
        ref={spotRef}
        position={[0, 5, 4]}
        intensity={2.2}
        color="#ffffff"
        angle={Math.PI / 10}
        penumbra={0.9}
        distance={22}
        decay={2}
        castShadow={false}
      />
    </>
  );
}
