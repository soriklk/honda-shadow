export default function Lights() {
  return (
    <>
      {/* Ambient fill — very dim to keep drama */}
      <ambientLight intensity={0.4} />

      {/* Key light — strong from upper-left front */}
      <directionalLight position={[4, 6, 5]} intensity={2.8} color="#f0ede8" />

      {/* Rim light — cold blue from rear right */}
      <directionalLight
        position={[-6, 2, -4]}
        intensity={1.4}
        color="#9ab4cc"
      />

      {/* Red accent kicker — low-angle drama */}
      <pointLight
        position={[0, -1.5, 3]}
        intensity={0.8}
        color="#c0392b"
        distance={8}
      />

      {/* Ground bounce — subtle warm fill from below */}
      <pointLight
        position={[0, -3, 0]}
        intensity={0.5}
        color="#3a2a1a"
        distance={12}
      />
    </>
  );
}
