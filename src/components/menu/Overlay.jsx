'use client'

import { MenuContext } from '@/contexts';
import { useLenis } from '@studio-freight/react-lenis';
import { useContext } from 'react';
import MenuUiOverlay from '../ui/menu/Overlay';


const MenuOverlay = (props) => {
  const {isOpen} = useContext(MenuContext),
  Lenis = useLenis()

  if(isOpen) {
    Lenis.stop()
  } else {
    Lenis.start()
  }

  return <MenuUiOverlay {...props}/>
};

export default MenuOverlay;