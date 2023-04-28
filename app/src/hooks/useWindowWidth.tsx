import { useState, useCallback, useLayoutEffect } from 'react';
import { MOBILE_DEVICE_MAX_WIDTH_IN_PX } from '../utils/constants/windowDeviceWidth';

export function useWindowWidth(): { isMobileDevice: boolean } {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const getWindowWidth = useCallback(() => {
    const { innerWidth } = window;
    setWindowWidth(innerWidth);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', getWindowWidth);
    getWindowWidth();
    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, [getWindowWidth]);

  const isMobileDevice = windowWidth < MOBILE_DEVICE_MAX_WIDTH_IN_PX;
  return { isMobileDevice };
}
