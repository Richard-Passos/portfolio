'use client';

import { Slot } from '@radix-ui/react-slot';
import { useState } from 'react';

import { cn, isFunctionThanCall } from '@/utils';

const KEYS = ['Enter', ' '];

const SkillCard = ({ asChild, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const Tag = asChild ? Slot : 'li';

  return (
    <Tag
      className={cn(
        'group isolate grid aspect-[1/.85] w-9/10 max-w-xs grid-rows-4 gap-2 overflow-hidden rounded-md border bg-main p-sm',
        className,
      )}
      data-state={isOpen ? 'open' : 'closed'}
      {...props}
      onClick={(ev) => {
        setIsOpen((state) => !state);

        isFunctionThanCall(props.onClick, ev);
      }}
      onKeyDown={(ev) => {
        if (KEYS.includes(ev.key)) ev.preventDefault();

        isFunctionThanCall(props.onKeyDown, ev);
      }}
      onKeyUp={(ev) => {
        if (KEYS.includes(ev.key)) setIsOpen((state) => !state);

        isFunctionThanCall(props.onKeyUp, ev);
      }}
    />
  );
};
export default SkillCard;
