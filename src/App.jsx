import Scene from "./components/Scene";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <div className="canvas-container">
        <Scene />
      </div>

      <section className="panel">
        <h1>Honda Shadow</h1>
      </section>

      <section className="panel">
        <h2>Motor V-Twin</h2>
      </section>

      <section className="panel">
        <h2>Diseño Custom</h2>
      </section>

      <section className="panel">
        <h2>Experiencia de conducción</h2>
      </section>
    </>
  );
}
