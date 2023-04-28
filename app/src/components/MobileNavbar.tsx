import { useRef, useState } from 'react';

import AsideMenu from './AsideMenu';
import { logo } from '../utils/logo';
import { useOutsideClick } from '../hooks/useOutsideClick';
import '../styles/mobile-navbar.css';

export default function MobileNavbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navRef = useRef(null);
  const menuClass = showMenu ? 'is-active' : '';

  function handleOutsideClick() {
    setShowMenu(false);
  }

  useOutsideClick(navRef, handleOutsideClick);

  return (
    <>
      <nav className={`mobile-navbar-container ${menuClass}`} ref={navRef}>
        <a href="/" className="mobile-navbar-logo-link">
          <img
            src={logo.src}
            alt={logo.alt}
            title="logo"
            className="mobile-navbar-logo-icon"
          />
        </a>
        <button
          type="button"
          className={`mobile-navbar-btn ${menuClass}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className={`mobile-navbar-menu-bar ${menuClass}`}></div>
        </button>
      </nav>
      {showMenu && <AsideMenu menuProps={{ menuClass }} />}
    </>
  );
}
