import { useCallback, useEffect, useRef } from 'react';
import { RefHookProps } from '../@types/RefHookProps';

type RefClickProps = {
  hookProps: RefHookProps;
};

export function useRefClick({ hookProps }: RefClickProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleRefClick = useCallback(
    (event: MouseEvent) => {
      const node = event.target as Node;
      if (ref.current && !ref.current?.contains(node)) {
        hookProps.stateHandler(!hookProps.previousState);
      }
    },
    [hookProps],
  );

  useEffect(() => {
    document.addEventListener('click', handleRefClick, true);
    return () => {
      document.removeEventListener('click', handleRefClick, true);
    };
  });

  return { ref };
}
