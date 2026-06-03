import Scene from "./components/Scene";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import ScrollTrack from "./components/ScrollTrack";
import { usePanelReveal } from "./hooks/usePanelReveal";
import "./styles/app.css";

/* ── Marquee helper ──────────────────────────────────── */
const TICKER_ITEMS = [
  "Honda Shadow",
  "V-Twin 745cc",
  "Custom Heritage",
  "American Spirit",
  "Liquid Cooled",
  "5-Speed Transmission",
];

function Marquee({ reverse = false }) {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="marquee-section">
      <div
        className="marquee-inner"
        style={reverse ? { animationDirection: "reverse" } : {}}
      >
        {items.map((t, i) => (
          <span key={i}>{i % 3 === 1 ? <em>{t}</em> : t}</span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  usePanelReveal();

  return (
    <>
      {/* ── Ambient UI chrome ─────────────────────── */}
      <Cursor />
      <Header />
      <ScrollTrack />

      {/* ── Fixed 3-D canvas ──────────────────────── */}
      <div className="canvas-container">
        <Scene />
      </div>

      {/* ── Scroll ticker strip ───────────────────── */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span key={i}>{i % 4 === 2 ? <em>{t}</em> : t}</span>
          ))}
        </div>
      </div>

      {/* ── Content panels ────────────────────────── */}
      <main className="panels-wrapper">
        {/* ─ HERO ──────────────────────────────────── */}
        <section className="panel panel--hero" id="hero">
          <p className="panel__eyebrow is-visible">Since 1983</p>
          <h1 className="panel__title is-visible">
            <span className="line">
              <span>Honda</span>
            </span>
            <span className="line">
              <span>Shadow</span>
            </span>
          </h1>
          <p className="panel__subtitle is-visible">
            Una leyenda forjada en acero. La cruiser que definió una generación
            de jinetes.
          </p>

          <div className="scroll-hint" aria-hidden="true">
            <span className="scroll-hint__text">Scroll</span>
            <div className="scroll-hint__arrow" />
          </div>

          <span className="panel__number">01 / 04</span>
        </section>

        <Marquee />

        {/* ─ MOTOR ─────────────────────────────────── */}
        <section className="panel panel--left" id="motor">
          <p className="panel__eyebrow">Motor</p>
          <h2 className="panel__title">
            <span className="line">
              <span>V-Twin</span>
            </span>
            <span className="line">
              <span>745cc</span>
            </span>
          </h2>
          <div className="panel__rule" />
          <p className="panel__subtitle">
            Dos cilindros en V a 52°. Refrigeración líquida. Un sonido que
            resuena en el asfalto antes de que lo escuches con los oídos.
          </p>
          <span className="panel__number">02 / 04</span>
        </section>

        <Marquee reverse />

        {/* ─ DISEÑO ────────────────────────────────── */}
        <section className="panel panel--right" id="diseno">
          <p className="panel__eyebrow">Diseño</p>
          <h2 className="panel__title">
            <span className="line">
              <span>Custom</span>
            </span>
            <span className="line">
              <span>Heritage</span>
            </span>
          </h2>
          <div className="panel__rule" />
          <p className="panel__subtitle">
            Líneas clásicas americanas. Depósito lágrima. Guardabarros
            generosos. Cromo que captura la luz del atardecer.
          </p>
          <span className="panel__number">03 / 04</span>
        </section>

        <Marquee />

        {/* ─ SPECS ─────────────────────────────────── */}
        <section className="panel panel--center" id="specs">
          <p className="panel__eyebrow">Especificaciones</p>
          <h2
            className="panel__title"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
          >
            <span className="line">
              <span>Datos Técnicos</span>
            </span>
          </h2>
          <div className="panel__rule" />
          <div className="specs-grid">
            <div className="spec-item">
              <p className="spec-item__value">
                745<span className="spec-item__unit">cc</span>
              </p>
              <p className="spec-item__label">Cilindrada</p>
            </div>
            <div className="spec-item">
              <p className="spec-item__value">
                45<span className="spec-item__unit">CV</span>
              </p>
              <p className="spec-item__label">Potencia máxima</p>
            </div>
            <div className="spec-item">
              <p className="spec-item__value">
                228<span className="spec-item__unit">kg</span>
              </p>
              <p className="spec-item__label">Peso en orden marcha</p>
            </div>
            <div className="spec-item">
              <p className="spec-item__value">
                5<span className="spec-item__unit">Vel</span>
              </p>
              <p className="spec-item__label">Transmisión</p>
            </div>
          </div>
          <span className="panel__number">04 / 04</span>
        </section>

        <Marquee reverse />

        {/* ─ EXPERIENCIA ───────────────────────────── */}
        <section className="panel panel--left" id="experiencia">
          <p className="panel__eyebrow">Experiencia</p>
          <h2 className="panel__title">
            <span className="line">
              <span>Conducir</span>
            </span>
            <span className="line">
              <span>es Vivir</span>
            </span>
          </h2>
          <div className="panel__rule" />
          <p className="panel__subtitle">
            Posición relajada. Manillar alto. El horizonte siempre por delante.
            La Shadow no es un vehículo — es un estado mental.
          </p>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────── */}
      <Footer />
    </>
  );
}
