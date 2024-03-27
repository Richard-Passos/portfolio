'use client';

import { useEventListener, useTimeout } from '@/hooks';
import { createContext, useState } from 'react';

const KEYS = ['Escape']

const MenuContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  isDeleted: false,
  setIsDeleted: () => {},
});

const MenuProvider = ({ deleteDelay = 700, value, ...props }) => {
  const [isOpen, setIsOpen] = useState(false),
  [isDeleted, setIsDeleted] = useState(true), 
  {reset, clear} = useTimeout(() => setIsDeleted(true), deleteDelay)

  const handleSetIsOpen = () => {
    if(!isOpen) {
      clear()

      setIsDeleted(false)
      setTimeout(() => setIsOpen(true), 1)
    }
    else {
      reset()
      setIsOpen(false)
    }
  }        

        useEventListener('keyup', (ev) => KEYS.includes(ev.key) && handleSetIsOpen)

  return <MenuContext.Provider
      value={{ isOpen, setIsOpen: handleSetIsOpen, isDeleted, setIsDeleted, ...value }}
      {...props}
    />
};

export default MenuContext;
export { MenuProvider };
