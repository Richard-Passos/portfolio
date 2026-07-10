import { DrawerTrigger } from '@/components/modules/Drawer';
import { MagneticButton, MagneticButtonProps } from '@/components/input/Button/variants/Magnetic';
import { MenuIcon } from '@/components/system/icons/Menu';
import { TimesIcon } from '@/components/system/icons/Times';
import { cn } from '@/utils/cn';
import { AnimateOnView } from '@/components/motion/Animate';
import { MergeProps } from '@/types/MergeProps';
import { UseAnimateOnViewOptions } from '@/hooks/useAnimateOnView';

export type MenuDrawerTriggerProps = MergeProps<{ data: { open: string, close: string }}, MagneticButtonProps>;

export const MenuDrawerTriggerAnimation = {
  from: {
    scale: 0,
  },
  to: {
    scale: 1,
    duration: .75,
    ease: 'elastic.inOut'
  },
  start: '400'
} satisfies UseAnimateOnViewOptions['config']

export const MenuDrawerTrigger = ({
  data,
  className,
  ...props
}: MenuDrawerTriggerProps) => {
  return (
      <AnimateOnView {...MenuDrawerTriggerAnimation}>
        <div className='fixed top-(--side) right-[calc(var(--side)+var(--removed-body-scroll-bar-size,0px))] z-50 [--side:--spacing(4)] has-data-[state=open]:scale-100! sm:[--side:--spacing(8)]'>
          <DrawerTrigger asChild>
            <MagneticButton
              iconOnly
              variant='default'
              className={cn('group/trigger h-16 rounded-full sm:h-20', className)}
              {...props}
            >
              <MenuIcon className='size-[40%]! group-data-[state=open]/trigger:hidden' />

              <TimesIcon className='absolute size-[40%]! group-data-[state=closed]/trigger:hidden' />

              <span className='sr-only data-[state=open]:hidden'>{data.open}</span>

              <span className='sr-only data-[state=closed]:hidden'>{data.close}</span>
            </MagneticButton>
          </DrawerTrigger>
        </div>
      </AnimateOnView>
  );
};
