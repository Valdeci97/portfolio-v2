import { logo } from '../utils/logo';
import { linkOptions } from '../utils/constants/link';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-container">
        <a href="/" className="navbar-logo-link">
          <img
            src={logo.src}
            alt={logo.alt}
            title="logo"
            className="navbar-logo-icon"
          />
        </a>
      </div>
      <div className="navbar-link-container">
        <div className="navbar-page-link-container">
          {linkOptions.map((link) => (
            <a href={link.href} key={link.href} className="navbar-link-common">
              {link.text}
            </a>
          ))}
        </div>
        <a
          href="/valdeci-moura-fullstack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-link-common navbar-resume-link"
        >
          Currículo
        </a>
      </div>
    </nav>
  );
}
