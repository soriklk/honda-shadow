export default function Header() {
  return (
    <header className="site-header">
      <a href="#" className="header__logo">
        <span className="header__logo-dot" />
        Honda Shadow
      </a>

      <nav>
        <ul className="header__nav">
          <li>
            <a href="#motor">Motor</a>
          </li>
          <li>
            <a href="#diseno">Diseño</a>
          </li>
          <li>
            <a href="#specs">Especificaciones</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>
        </ul>
      </nav>

      <a href="#" className="header__badge">
        Configurar
      </a>
    </header>
  );
}
