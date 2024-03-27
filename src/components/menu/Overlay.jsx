'use client';

import { useLenis } from '@studio-freight/react-lenis';
import { useContext, useEffect } from 'react';

import { MenuContext } from '@/contexts';

import MenuUiOverlay from '../ui/menu/Overlay';

const MenuOverlay = (props) => {
  const { isOpen } = useContext(MenuContext),
    Lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      Lenis.stop();
    } else {
      Lenis.start();
    }  
  }, [isOpen])

  return <MenuUiOverlay {...props} />;
};

export default MenuOverlay;
