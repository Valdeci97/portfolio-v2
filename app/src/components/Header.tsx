import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import '../styles/header.css';

type HeaderProps = { isMobileDevice: boolean };

export default function Header({ isMobileDevice }: HeaderProps) {
  return (
    <header className="header-container">
      {!isMobileDevice && <Navbar />}
      {isMobileDevice && <MobileNavbar />}
    </header>
  );
}
