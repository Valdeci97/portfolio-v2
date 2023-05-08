import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import useScroll from '../hooks/useScroll';
import '../styles/header.css';

type HeaderProps = { isMobileDevice: boolean };

export default function Header({ isMobileDevice }: HeaderProps) {
  const { hideHeader } = useScroll();

  return (
    <header className={`header-container ${hideHeader}`}>
      {!isMobileDevice && <Navbar />}
      {isMobileDevice && <MobileNavbar />}
    </header>
  );
}
