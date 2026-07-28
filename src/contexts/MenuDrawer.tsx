'use client';

import { useContext, ComponentProps, createContext, useState, useRef } from 'react';

import { useLenis } from 'lenis/react';
import { gsap, useGSAP } from '@/hooks/useGSAP';

export type MenuDrawerContextState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const MenuDrawerContext = createContext<MenuDrawerContextState | null>(null);

export type MenuDrawerProviderProps = Omit<
  ComponentProps<typeof MenuDrawerContext.Provider>,
  'value'
>;

export const MenuDrawerProvider = (props: MenuDrawerProviderProps) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const tl = useRef<gsap.core.Timeline>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          paused: true,
          onStart: () => setOpen(true),
          onReverseComplete: () => setOpen(false)
        })
        .from('[data-menu-drawer-backdrop]', {
          opacity: 0,
          duration: 0.3,
          ease: 'power1.out'
        })
        .from(
          '[data-menu-drawer-content]',
          {
            x: '100%',
            duration: 0.6,
            ease: 'expo.out(1.4)'
          },
          '<'
        )
        .from(
          '[data-menu-drawer-item]',
          {
            opacity: 0,
            y: 20,
            scale: 0.96,
            duration: 0.45,
            ease: 'power3.out',
            stagger: 0.045
          },
          '-=0.25'
        );
    },
    { dependencies: [] }
  );

  const toggleTl = contextSafe((open: boolean) => {
    if (open) {
      lenis?.stop();
      tl.current?.play();
    } else {
      lenis?.start();
      tl.current?.reverse();
    }
  });

  return (
    <MenuDrawerContext.Provider
      value={{ open, setOpen: toggleTl }}
      {...props}
    />
  );
};

export const useMenuDrawerContext = () => {
  const context = useContext(MenuDrawerContext);

  if (!context) {
    throw new Error('useMenuDrawerContext must be used within a MenuDrawerProvider.');
  }

  return context;
};
