import SVGIcon from './SVGIcon';
import { icons } from '../utils/icons';
import '../styles/social-media.css';

export default function SocialMedia() {
  return (
    <aside className="social-media-container">
      <ul className="social-media-list">
        {icons.map((icon) => (
          <li key={icon.url} className="social-media-list-item">
            <SVGIcon
              iconProps={{ ...icon }}
              componentClass="social-media-svg"
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
