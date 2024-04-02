'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { useContext, useEffect } from 'react';

import { MenuContext } from '@/contexts';

import MenuUiOverlay from '../ui/menu/Overlay';

const MenuOverlay = (props) => {
  const { isOpen } = useContext(MenuContext),
    lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [lenis, isOpen]);

  return <MenuUiOverlay {...props} />;
};

export default MenuOverlay;
