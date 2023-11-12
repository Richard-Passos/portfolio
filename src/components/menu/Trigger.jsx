import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import Button from '../button';
import { ScrollAnimation } from '../scroll-animation';
import { SheetTrigger } from '../ui/sheet';

const MenuTrigger = ({ className, variants, ...props }, ref) => {
  const animationConfig = {
    useScrollRes: 'scrollY',
    prop: '--tw-scale-x',
    scrollPoints: [0, 299.999, 300],
    propPoints: [0, 0, 1],
  };

  return (
    <ScrollAnimation
      config={animationConfig}
      ref={ref}
      smoothConfig={{ prop: smoothConfig }}
      {...props}
    >
      <SheetTrigger asChild>
        <Button
          className={cn(
            'group [--tw-scale-y:--tw-scale-x] data-open:!pointer-events-auto',
            className,
          )}
          variants={{ color: 'main', ...variants }}
        >
          <Icon>
            <Cross2Icon className='group-data-closed:pointer-events-none group-data-closed:opacity-0' />
          </Icon>

          <Icon>
            <HamburgerMenuIcon className='group-data-open:pointer-events-none group-data-open:opacity-0' />
          </Icon>
        </Button>
      </SheetTrigger>
    </ScrollAnimation>
  );
};

const Icon = ({ className, ...props }) => {
  return (
    <Slot
      className={cn(
        'absolute h-[--dimen] w-[--dimen] transition-opacity [--dimen:theme(spacing.4)] sm:[--dimen:theme(spacing.5)] md:[--dimen:theme(spacing.6)]',
        className,
      )}
      {...props}
    />
  );
};

export default forwardRef(MenuTrigger);
