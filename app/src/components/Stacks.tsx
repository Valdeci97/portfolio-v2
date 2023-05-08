import { stacks } from '../utils/constants/stacks';
import '../styles/stacks.css';

export default function Stacks() {
  return (
    <ul className="list-container">
      {stacks.map((stack) => (
        <li key={stack} className="list-item">
          {stack}
        </li>
      ))}
    </ul>
  );
}
