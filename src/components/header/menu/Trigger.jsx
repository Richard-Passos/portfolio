import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import { MagneticButton } from '../../button';
import { ScrollAnimation } from '../../scroll-animation';
import { MenuIcon, TimesIcon } from '../../ui/icon/icons';
import { MenuTrigger } from '../../ui/menu';

const HeaderMenuTrigger = ({ className, variants, ...props }, ref) => {
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
      smoothConfig={smoothConfig}
      {...props}
    >
      <MenuTrigger asChild>
        <MagneticButton
          className={cn(
            '[--tw-scale-y:--tw-scale-x] [--variant-a:--primary] hover:text-primary-content data-open:![--tw-scale-x:1]',
            className,
          )}
          variants={{ color: 'main', ...variants }}
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
      </MenuTrigger>
    </ScrollAnimation>
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

export default forwardRef(HeaderMenuTrigger);
