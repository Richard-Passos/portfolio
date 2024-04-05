'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

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

  const handleSetIsOpen = () => {
    if (!isOpen) {
      clear();

      setIsDeleted(false);
      setTimeout(() => setIsOpen(true), 1);
    } else {
      reset();
      setIsOpen(false);
    }
  };

  useEventListener('keyup', (ev) => KEYS.includes(ev.key) && handleSetIsOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleIsOpen: handleSetIsOpen,
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
