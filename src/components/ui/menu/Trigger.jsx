'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useContext } from 'react';

import { MenuContext } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const MenuTrigger = ({ asChild, ...props }, ref) => {
  const { state, toggleIsOpen } = useContext(MenuContext);

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      data-state={state}
      {...props}
      onClick={(ev) => {
        toggleIsOpen();

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default forwardRef(MenuTrigger);
