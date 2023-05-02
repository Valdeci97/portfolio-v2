import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Home from './pages/Home';
import { useWindowWidth } from './hooks/useWindowWidth';
import './styles/app.css';

export default function App() {
  const { isMobileDevice } = useWindowWidth();

  return (
    <>
      <Header isMobileDevice={isMobileDevice} />
      {!isMobileDevice && <SocialMedia />}
      <div className="pages-container">
        <main className="main-container">
          <Home />
        </main>
      </div>
    </>
  );
}
