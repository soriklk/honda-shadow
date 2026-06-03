export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-5, 2, -5]} intensity={1} />
    </>
  );
}
