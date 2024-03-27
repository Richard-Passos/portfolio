import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticButton } from '../button';
import { ScrollAnimate} from '../scroll-animate';
import { MenuIcon, TimesIcon } from '../ui/icon/icons';
import MenuUiTrigger from '../ui/menu/Trigger';

const MenuTrigger = ({ className, ...props }, ref) => {
  const animationConfig = {
    scroll: 'scrollY',
    scrollPoints: [0, 299.999, 300],
    prop: '--tw-scale-x',
    propPoints: [0, 0, 1],
  };

  return (
    <ScrollAnimate      config={animationConfig}
      ref={ref}
      smoothConfig={smoothConfig}
      {...props}
    >
      <MenuUiTrigger asChild>
          <MagneticButton
          className={cn(
            'data-open:primary [--tw-scale-y:--tw-scale-x] !text-variant-content [--variant-a:--primary] hover:[--variant-c:--primary-c] data-open:![--tw-scale-x:1]',
            className,
          )}
          variants={{color: 'main'}}
        >
          <Icon>
            <TimesIcon className='pointer-events-none group-data-closed:opacity-0' />
          </Icon>

          <Icon>
            <MenuIcon className='pointer-events-none group-data-open:opacity-0' />
          </Icon>

          <span className='sr-only group-data-open:hidden'>Open menu</span>

          <span className='sr-only group-data-closed:hidden'>Close menu</span>
        </MagneticButton>
      </MenuUiTrigger>
    </ScrollAnimate>
  );
};

const Icon = ({ className, ...props }) => {
  return (
    <Slot
      aria-hidden
      className={cn('absolute transition-opacity', className)}
      {...props}
    />
  );
};

export default forwardRef(MenuTrigger);
