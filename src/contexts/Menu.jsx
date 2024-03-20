'use client';

import { createContext, useState } from 'react';

const MenuContext = createContext({
  isOpen: 0,
  setIsOpen: () => {},
});

const MenuProvider = ({ value, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{ isOpen, setIsOpen, ...value }}
      {...props}
    />
  );
};

export default MenuContext;
export { MenuProvider };
