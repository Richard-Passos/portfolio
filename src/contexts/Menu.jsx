'use client';

import { usePathname } from '@/navigation';
import { createContext, useCallback, useEffect, useState } from 'react';

import { useEventListener, useTimeout } from '@/hooks';

const KEYS = ['Escape'];

const MenuContext = createContext({
  isOpen: false,
  toggleIsOpen: () => {},
  state: '',
  isDeleted: false,
  setIsDeleted: () => {},
});

const MenuProvider = ({ deleteDelay = 700, value, ...props }) => {
  const [isOpen, setIsOpen] = useState(false),
  [isDeleted, setIsDeleted] = useState(true),
  { reset, clear } = useTimeout(() => setIsDeleted(true), deleteDelay),
  pathname = usePathname();
  
  const state = isOpen ? 'open' : 'closed';

  const handleSetIsOpen = useCallback((isOpen) => {
    if (isOpen) {
      clear();
      
      setIsDeleted(false);
      setTimeout(() => setIsOpen(true), 1);
    } else {
      reset();
      
      setIsOpen(false);
    }
  }, [clear, setIsDeleted, setIsOpen, reset])

  useEventListener('keyup', (ev) => {
    if(KEYS.includes(ev.key)) handleSetIsOpen(false)
  });

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, pathname]);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleIsOpen: () => handleSetIsOpen(!isOpen),
        state,
        isDeleted,
        setIsDeleted,
        ...value,
      }}
      {...props}
    />
  );
};

export default MenuContext;
export { MenuProvider };
