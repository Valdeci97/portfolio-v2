import { MobileButtonProps } from '../@types/MobileButtonProps';
import { useRefClick } from '../hooks/useRefClick';

import '../styles/mobile-menu-button.css';

type MobileMenuButtonProps = {
  mobileButton: MobileButtonProps;
};

export default function MobileMenuButton({
  mobileButton,
}: MobileMenuButtonProps) {
  const refProps = {
    hookProps: {
      previousState: mobileButton.previousState,
      stateHandler: mobileButton.stateHandler,
    },
  };
  const { ref } = useRefClick(refProps);

  return (
    <div className="mobile-menu-container" ref={ref}>
      <button
        type="button"
        className={`mobile-menu-btn ${mobileButton.mobileClass}`}
        onClick={() => mobileButton.stateHandler()}
      >
        <div className="mobile-menu-bar"></div>
      </button>
    </div>
  );
}
