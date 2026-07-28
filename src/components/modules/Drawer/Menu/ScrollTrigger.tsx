import { AnimateOnView, AnimateOnViewConfig } from '@/components/motion/Animate';
import { MenuIcon } from '@/components/system/Icon/Menu';
import { TimesIcon } from '@/components/system/Icon/Times';
import { cn } from '@/utils/cn';
import { useIntlayer } from 'next-intlayer/server';
import {
  MenuDrawerScrollTriggerClient,
  MenuDrawerScrollTriggerClientProps
} from '@/components/modules/Drawer/Menu/ScrollTriggerClient';

export type MenuDrawerScrollTriggerProps = Omit<MenuDrawerScrollTriggerClientProps, 'children'>;

export const MenuDrawerScrollTriggerAnim = {
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

export const MenuDrawerScrollTrigger = ({ className, ...props }: MenuDrawerScrollTriggerProps) => {
  const t = useIntlayer('menu-drawer');

  return (
    <AnimateOnView config={MenuDrawerScrollTriggerAnim}>
      <div className='fixed top-4 right-4 z-60 has-focus-visible:transform-[scale(1)]! has-data-[state=open]:transform-[scale(1)]! sm:top-8 sm:right-8'>
        <MenuDrawerScrollTriggerClient
          iconOnly
          className={cn('h-12 rounded-full border-border text-2xl sm:h-20 sm:text-4xl', className)}
          {...props}
        >
          <MenuIcon className='transition-[transform,opacity] duration-150 group-data-[state=open]/button:scale-50 group-data-[state=open]/button:opacity-0' />

          <TimesIcon className='absolute transition-[transform,opacity] duration-150 group-data-[state=closed]/button:scale-50 group-data-[state=closed]/button:opacity-0' />

          <span className='sr-only data-[state=open]:hidden'>{t.menu.open}</span>

          <span className='sr-only data-[state=closed]:hidden'>{t.menu.close}</span>
        </MenuDrawerScrollTriggerClient>
      </div>
    </AnimateOnView>
  );
};
