import { useCallback, useLayoutEffect, useState } from 'react';

export default function useScroll(): { hideHeader: string } {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY > 0) return setIsScrolling(true);
    setIsScrolling(false);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const hideHeader = isScrolling ? 'hide-header' : '';
  return { hideHeader };
}
