'use client';

import { ComponentProps, MouseEvent, useCallback } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useBooleanContext } from '@/hooks/contexts';

type DrawerTriggerProps = SlotAsChildProps<ComponentProps<'button'>>;

const DrawerTrigger = ({ asChild, onClick, ...props }: DrawerTriggerProps) => {
  const { value, toggle } = useBooleanContext();

  const handleClick = useCallback(() => {
    (ev: MouseEvent<HTMLButtonElement>) => {
      toggle();

      onClick?.(ev);
    };
  }, [toggle, onClick]);

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-opened={value ? true : undefined}
      onClick={handleClick}
      {...props}
    />
  );
};

export { DrawerTrigger };
export type { DrawerTriggerProps };
