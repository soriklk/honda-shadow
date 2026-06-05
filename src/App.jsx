import Scene from "./components/Scene";
import "./styles/app.css";

export default function App() {
  return (
    <>
      {/* Canvas fijo */}
      <div className="canvas-container">
        <Scene />
      </div>

      {/* Overlay de navegación */}
      <nav className="nav">
        <div className="nav-logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 814 1000"
            fill="currentColor"
          >
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 267.7-317.3 70.2 0 128.6 46.2 172.6 46.2 42.5 0 109.2-49 189.5-49 30.4 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
          </svg>
        </div>
        <div className="nav-links">
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
        </div>
        <div className="nav-actions">
          <span>Comprar</span>
        </div>
      </nav>

      {/* SECCIÓN 1: Hero */}
      <section className="panel panel-hero" id="hero">
        <div className="panel-content hero-content">
          <p className="eyebrow">Nuevo</p>
          <h1 className="hero-title">MacBook Pro</h1>
          <p className="hero-subtitle">Monstruosamente potente.</p>
        </div>
      </section>

      {/* SECCIÓN 2: Chip M4 Pro */}
      <section className="panel panel-chip" id="chip">
        <div className="panel-content chip-content">
          <div className="chip-badge">Chip M4 Pro</div>
          <h2 className="section-title">
            El cerebro más avanzado
            <br />
            de un Mac portátil.
          </h2>
          <p className="section-body">
            Con hasta 24 núcleos de CPU y 40 núcleos de GPU, el chip M4 Pro
            redefine lo que es posible en un portátil.
          </p>
          <div className="stat-grid">
            <div className="stat">
              <span className="stat-num">3×</span>
              <span className="stat-label">
                más rápido que
                <br />
                el Intel más potente
              </span>
            </div>
            <div className="stat">
              <span className="stat-num">24h</span>
              <span className="stat-label">
                de duración
                <br />
                de batería
              </span>
            </div>
            <div className="stat">
              <span className="stat-num">48GB</span>
              <span className="stat-label">
                memoria
                <br />
                unificada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Puertos - Lado izquierdo */}
      <section className="panel panel-ports-left" id="ports-left">
        <div className="panel-content ports-content">
          <div className="port-callout port-callout-left">
            <h2 className="section-title">
              Conectividad
              <br />
              sin límites.
            </h2>
            <div className="port-list">
              <div className="port-item">
                <div className="port-dot"></div>
                <div className="port-info">
                  <span className="port-name">Thunderbolt 4</span>
                  <span className="port-desc">
                    Hasta 40 Gb/s · Carga · DisplayPort
                  </span>
                </div>
              </div>
              <div className="port-item">
                <div className="port-dot"></div>
                <div className="port-info">
                  <span className="port-name">HDMI</span>
                  <span className="port-desc">Soporta 8K a 60 Hz</span>
                </div>
              </div>
              <div className="port-item">
                <div className="port-dot"></div>
                <div className="port-info">
                  <span className="port-name">MagSafe 3</span>
                  <span className="port-desc">
                    Carga magnética de alta velocidad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: Display */}
      <section className="panel panel-display" id="display">
        <div className="panel-content display-content">
          <h2 className="section-title display-title">Liquid Retina XDR.</h2>
          <p className="section-body display-body">
            Una pantalla de <strong>1,000 nits</strong> de brillo sostenido,
            <br />
            con ProMotion adaptativa de hasta <strong>120 Hz</strong>.<br />
            El negro más profundo. El blanco más brillante.
          </p>
          <div className="display-specs">
            <div className="dspec">
              <span className="dspec-val">1600</span>
              <span className="dspec-unit">nits</span>
              <span className="dspec-label">pico de brillo</span>
            </div>
            <div className="dspec-divider"></div>
            <div className="dspec">
              <span className="dspec-val">1,000,000:1</span>
              <span className="dspec-unit"></span>
              <span className="dspec-label">contraste</span>
            </div>
            <div className="dspec-divider"></div>
            <div className="dspec">
              <span className="dspec-val">120</span>
              <span className="dspec-unit">Hz</span>
              <span className="dspec-label">ProMotion</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: Puertos laterales derechos */}
      <section className="panel panel-ports-right" id="ports-right">
        <div className="panel-content ports-content ports-content-right">
          <div className="port-callout port-callout-right">
            <h2 className="section-title">
              Ranura SD.
              <br />
              Jack de auriculares.
            </h2>
            <p className="section-body">
              El lado derecho no se queda atrás. Ranura SDXC de alta velocidad
              para fotógrafos y videógrafos. Jack de 3,5 mm con audio de alta
              impedancia.
            </p>
            <div className="port-list">
              <div className="port-item">
                <div className="port-dot port-dot-accent"></div>
                <div className="port-info">
                  <span className="port-name">Ranura SDXC</span>
                  <span className="port-desc">UHS-II · Hasta 312 MB/s</span>
                </div>
              </div>
              <div className="port-item">
                <div className="port-dot port-dot-accent"></div>
                <div className="port-info">
                  <span className="port-name">Jack 3,5 mm</span>
                  <span className="port-desc">
                    Compatible con auriculares de alta impedancia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: Performance Metrics */}
      <section className="panel panel-metrics" id="metrics">
        <div className="panel-content metrics-content">
          <div className="metrics-header">
            <h2 className="metrics-title">
              <span className="letter">R</span>
              <span className="letter">e</span>
              <span className="letter">n</span>
              <span className="letter">d</span>
              <span className="letter">i</span>
              <span className="letter">m</span>
              <span className="letter">i</span>
              <span className="letter">e</span>
              <span className="letter">n</span>
              <span className="letter">t</span>
              <span className="letter">o</span>
              <span className="space"> </span>
              <span className="letter">E</span>
              <span className="letter">p</span>
              <span className="letter">i</span>
              <span className="letter">c</span>
              <span className="letter">o</span>
            </h2>
          </div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">
                <span className="counter">4</span>
                <span className="unit">x</span>
              </div>
              <div className="metric-bar-container">
                <div className="metric-bar"></div>
              </div>
              <p className="metric-label">Más GPU que la generación anterior</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                <span className="counter">20</span>
                <span className="unit">h</span>
              </div>
              <div className="metric-bar-container">
                <div className="metric-bar"></div>
              </div>
              <p className="metric-label">Duración de batería en video</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                <span className="counter">98</span>
                <span className="unit">%</span>
              </div>
              <div className="metric-bar-container">
                <div className="metric-bar"></div>
              </div>
              <p className="metric-label">Menos consumo de energía</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">
                <span className="counter">120</span>
                <span className="unit">fps</span>
              </div>
              <div className="metric-bar-container">
                <div className="metric-bar"></div>
              </div>
              <p className="metric-label">ProMotion adaptativo máximo</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CTA Final */}
      <section className="panel panel-cta" id="cta">
        <div className="panel-content cta-content">
          <h2 className="cta-title">MacBook Pro.</h2>
          <p className="cta-subtitle">Desde 2.499 €</p>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">
              Comprar
            </a>
            <a href="#" className="btn-secondary">
              Saber más &rsaquo;
            </a>
          </div>
          <p className="cta-note">
            Financiación disponible · Devolución gratuita · Apple Trade In
          </p>
        </div>
      </section>
    </>
  );
}
