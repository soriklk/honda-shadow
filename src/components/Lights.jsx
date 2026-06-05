export default function Lights() {
  return (
    <>
      {/* Luz ambiental suave */}
      <ambientLight intensity={0.4} color="#ffffff" />

      {/* Luz principal frontal - simula pantalla/estudio */}
      <directionalLight position={[0, 4, 6]} intensity={2.5} color="#f0f0ff" />

      {/* Luz de relleno lateral derecha */}
      <directionalLight position={[6, 2, 2]} intensity={1.2} color="#ffffff" />

      {/* Luz de relleno lateral izquierda - tono cálido sutil */}
      <directionalLight position={[-5, 1, 3]} intensity={0.8} color="#ffe8d0" />

      {/* Rim light trasera - separación del fondo */}
      <directionalLight position={[0, 3, -8]} intensity={1.5} color="#4488ff" />

      {/* Luz inferior suave - evita sombras duras */}
      <pointLight position={[0, -3, 4]} intensity={0.6} color="#ffffff" />
    </>
  );
}
