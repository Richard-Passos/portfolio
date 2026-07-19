import { RefObject } from 'react';
import { useEventListener as hookUseEventListener } from 'usehooks-ts';

export const useEventListener = hookUseEventListener as <K extends keyof HTMLElementEventMap>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<HTMLElement | null>,
  options?: boolean | AddEventListenerOptions
) => void;
