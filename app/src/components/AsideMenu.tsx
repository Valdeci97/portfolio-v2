import SVGIcon from './SVGIcon';
import { linkOptions } from '../utils/constants/link';
import { icons } from '../utils/icons';
import '../styles/aside-menu.css';

type AsideMenuProps = {
  menuProps: { menuClass: string };
};

export default function AsideMenu({ menuProps }: AsideMenuProps) {
  return (
    <aside className={`aside-menu-container ${menuProps.menuClass}`}>
      <nav className="aside-menu-link-container">
        {linkOptions.map((link) => (
          <a href={link.href} key={link.href} className="aside-menu-link">
            {link.text}
          </a>
        ))}
        <a
          href="/valdeci_moura_fullstack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="aside-menu-link resume-link"
        >
          Currículo
        </a>
        <ul className="aside-menu-social-list-container">
          {icons.map((icon) => (
            <li key={icon.url} className="aside-menu-social-list-item">
              <SVGIcon
                iconProps={{ ...icon }}
                componentClass="aside-menu-svg"
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
