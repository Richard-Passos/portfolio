import {
  MenuDrawerTriggerClient,
  MenuDrawerTriggerClientProps
} from '@/components/modules/Drawer/variants/Menu/Trigger/Client';
import { AnimateOnView, AnimateOnViewConfig } from '@/components/motion/Animate';
import { MenuIcon } from '@/components/system/Icon/Menu';
import { TimesIcon } from '@/components/system/Icon/Times';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type MenuDrawerTriggerProps = MergeProps<
  { data: { open: string; close: string } },
  MenuDrawerTriggerClientProps
>;

export const MenuDrawerTriggerAnimation = {
  from: {
    scale: 0
  },
  to: {
    scale: 1,
    duration: 0.75,
    ease: 'elastic.inOut'
  },
  start: '400'
} satisfies AnimateOnViewConfig;

export const MenuDrawerTrigger = ({ data, className, ...props }: MenuDrawerTriggerProps) => {
  return (
    <AnimateOnView {...MenuDrawerTriggerAnimation}>
      <div className='fixed top-(--side) right-[calc(var(--side)+var(--scroll-bar-size,0px))] z-50 [--side:--spacing(4)] has-data-[state=open]:transform-[scale(1)]! sm:[--side:--spacing(8)]'>
        <MenuDrawerTriggerClient
          iconOnly
          className={cn('h-16 rounded-full border-border text-4xl sm:h-20', className)}
          {...props}
        >
          <MenuIcon className='group-data-[state=open]/button:hidden' />

          <TimesIcon className='absolute group-data-[state=closed]/button:hidden' />

          <span className='sr-only data-[state=open]:hidden'>{data.open}</span>

          <span className='sr-only data-[state=closed]:hidden'>{data.close}</span>
        </MenuDrawerTriggerClient>
      </div>
    </AnimateOnView>
  );
};
