import { RefObject } from 'react';
// import { RefHookProps } from '../@types/RefHookProps';
import useEventListener from './useEventListener';

// type RefClickProps = {
//   hookProps: RefHookProps;
// };

// export function useRefClick({ hookProps }: RefClickProps) {
//   const handleRefClick = useCallback(
//     (event: MouseEvent) => {
//       const node = event.target as Node;
//       if (hookProps.ref.current && hookProps.ref.current?.contains(node)) {
//         console.log(hookProps.ref.current);
//         console.log(!hookProps.ref.current?.contains(node));
//         return;
//       }
//       console.log(event);
//       hookProps.stateHandler(false);
//     },
//     [hookProps],
//   );

//   useEffect(() => {
//     document.addEventListener('click', handleRefClick, true);
//     return () => {
//       document.removeEventListener('click', handleRefClick, true);
//     };
//   });

//   return { ref: hookProps.ref };
// }

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent) => void,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, (event) => {
    const node = event.target as Node;
    const uiElement = ref?.current;
    if (!uiElement || uiElement?.contains(node)) return;
    handler(event);
  });
}
