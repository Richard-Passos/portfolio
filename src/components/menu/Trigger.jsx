import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticButton } from '../button';
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
        <MagneticButton
          className={cn(
            'group [--tw-scale-y:--tw-scale-x] data-open:!pointer-events-auto data-open:!scale-100',
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
        </MagneticButton>
      </SheetTrigger>
    </ScrollAnimation>
  );
};

const Icon = ({ className, ...props }) => {
  return (
    <Slot
      className={cn('absolute h-1/3 w-1/3 transition-opacity', className)}
      {...props}
    />
  );
};

export default forwardRef(MenuTrigger);
