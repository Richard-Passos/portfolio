'use client';

import { Slot } from '@radix-ui/react-slot';
import { useContext } from 'react';

import { MenuContext } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const KEYS = ['Enter', ' '];

const MenuClose = ({ asChild, ...props }) => {
  const { toggleIsOpen } = useContext(MenuContext);

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      {...props}
      onClick={(ev) => {
        toggleIsOpen();

        isFunctionThanCall(props.onClick, ev);
      }}
      onKeyDown={(ev) => {
        if (KEYS.includes(ev.key)) ev.preventDefault();

        isFunctionThanCall(props.onKeyDown, ev);
      }}
      onKeyUp={(ev) => {
        if (KEYS.includes(ev.key)) toggleIsOpen();

        isFunctionThanCall(props.onKeyUp, ev);
      }}
    />
  );
};

export default MenuClose;
