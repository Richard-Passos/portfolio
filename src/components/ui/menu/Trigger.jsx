'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const KEYS = ['Enter', ' '];

const MenuTrigger = ({ asChild, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const handleSetIsOpen = () => setIsOpen((state) => !state);

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      data-state={isOpen ? 'open' : 'closed'}
      {...props}
      onClick={(ev) => {
        handleSetIsOpen();

        isFunctionThanCall(props.onClick, ev);
      }}
      onKeyDown={(ev) => {
        if (KEYS.includes(ev.key)) ev.preventDefault();

        isFunctionThanCall(props.onKeyDown, ev);
      }}
      onKeyUp={(ev) => {
        if (KEYS.includes(ev.key)) handleSetIsOpen();

        isFunctionThanCall(props.onKeyUp, ev);
      }}
    />
  );
};

export default forwardRef(MenuTrigger);
