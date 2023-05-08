import { RefObject } from 'react';
import useEventListener from './useEventListener';

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
