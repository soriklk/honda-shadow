export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer__top">
        <div>
          <h2 className="footer__brand-name">
            Honda
            <br />
            Shadow
          </h2>
          <p className="footer__brand-tagline">
            La herencia del asfalto, refinada en acero y cromo. Cada curva, una
            declaración.
          </p>
        </div>

        <div>
          <p className="footer__col-title">Explorar</p>
          <ul className="footer__links">
            <li>
              <a href="#">Motor V-Twin</a>
            </li>
            <li>
              <a href="#">Diseño Custom</a>
            </li>
            <li>
              <a href="#">Especificaciones</a>
            </li>
            <li>
              <a href="#">Galería</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer__col-title">Contacto</p>
          <ul className="footer__links">
            <li>
              <a href="#">Concesionarios</a>
            </li>
            <li>
              <a href="#">Test Drive</a>
            </li>
            <li>
              <a href="#">Financiación</a>
            </li>
            <li>
              <a href="#">Soporte</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 Honda Motor Co., Ltd. — Todos los derechos reservados
        </p>
        <ul className="footer__socials">
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">YouTube</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
