import { MenuDrawerTriggerClient, MenuDrawerTriggerClientProps } from './Client';
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
    <AnimateOnView config={MenuDrawerTriggerAnimation}>
      <div className='fixed top-4 right-4 z-50 has-focus-visible:transform-[scale(1)]! has-data-[state=open]:transform-[scale(1)]! sm:top-8 sm:right-8'>
        <MenuDrawerTriggerClient
          iconOnly
          className={cn('h-12 rounded-full border-border text-2xl sm:h-20 sm:text-4xl', className)}
          {...props}
        >
          <MenuIcon className='transition-[transform,opacity] duration-150 group-data-[state=open]/button:scale-50 group-data-[state=open]/button:opacity-0' />

          <TimesIcon className='absolute transition-[transform,opacity] duration-150 group-data-[state=closed]/button:scale-50 group-data-[state=closed]/button:opacity-0' />

          <span className='sr-only data-[state=open]:hidden'>{data.open}</span>

          <span className='sr-only data-[state=closed]:hidden'>{data.close}</span>
        </MenuDrawerTriggerClient>
      </div>
    </AnimateOnView>
  );
};
