import { linkOptions } from '../utils/constants/link';

import '../styles/mobile-navbar.css';

export default function MobileNavbar({ mobileClass }: { mobileClass: string }) {
  return (
    <aside className={`mobile-navbar-container ${mobileClass}`}>
      <nav className="mobile-navbar-link-container">
        {linkOptions.map((link) => (
          <a href={link.href} key={link.href} className="mobile-link">
            {link.text}
          </a>
        ))}
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-link mobile-resume-link"
        >
          Currículo
        </a>
      </nav>
    </aside>
  );
}
