import "./header.css";

import Hamburger from "../hamburger/hamburger";

export default function Header() {
  return (
    <header className="header row">
      <section className="header__leftSection">
        <h1>Surbhi.</h1>
      </section>
      <nav className="header__midSection">
        <ul className="navbar hide__WhenIpad">
          <li className="active">Home</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
        <a className="btn_callToAction show__WhenIpad" href="#contact__page">
          Let's Talk
        </a>
      </nav>
      <section className="header__rightSection">
        <a className="hide__WhenIpad btn_callToAction" href="#contact__page">
          Let's Talk
        </a>
        <Hamburger />
      </section>
    </header>
  );
}
