'use client';

import { cn } from '@/utils/cn';
import {
  MenuPositioner,
  MenuContent as UiMenuContent,
  MenuContentProps as UiMenuContentProps
} from '@ark-ui/react/menu';

export type MenuContentProps = UiMenuContentProps;

export const MenuContent = ({ className, ...props }: MenuContentProps) => {
  return (
    <MenuPositioner className='z-40'>
      <UiMenuContent
        className={cn(
          'flex flex-col gap-0.5 rounded border bg-muted p-1 text-sm shadow focus-visible:outline-hidden',
          className
        )}
        {...props}
      />
    </MenuPositioner>
  );
};
