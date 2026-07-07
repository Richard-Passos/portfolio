import data from './Root.data';

import { Fragment } from 'react';
import { Link } from '@/components/navigation/Link';
import { Text } from '@/components/system/Text';
import Drawer, { type DrawerProps } from '@/components/modules/Drawer';
import { LocaleMenu } from '@/components/navigation/Menu/variants/Locale';

import { MenuDrawerTrigger, MenuDrawerTriggerMobile } from './Trigger';
import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { NavTabs, NavTabsProps } from '@/components/navigation/Tabs/variants/Nav';
import { MergeProps } from '@/types/MergeProps';

export type MenuDrawerProps = MergeProps<{ nav: NavTabsProps['items'] }, DrawerProps>;

export const MenuDrawer = async ({ nav, ...props }: MenuDrawerProps) => {
  return (
      <Drawer swipeDirection='end' modal={false} trapFocus={false} preventScroll {...props}>
        <MenuDrawerTriggerMobile className='md:hidden'>
          {data.menu.label}
        </MenuDrawerTriggerMobile> 

        <MenuDrawerTrigger
          data={{ open: data.menu.open, close: data.menu.close }}
        />
    
        <Drawer.Backdrop />

        <Drawer.Positioner className='z-40'>
          <Drawer.Content className='flex grow flex-col max-w-xl p-10 border-l'> 
            <Drawer.Title className='border-b px-2 py-4'>
              {data.menu.label}
            </Drawer.Title>

            <NavTabs
              id='menu-drawer'
              items={nav}
              data-autofocus
              orientation='vertical'
              className='my-8 mx-4 text-4xl [&_a]:h-16!'
            />

            <div className='mt-auto flex flex-wrap px-4'>
              <LocaleMenu className='mr-2.5' />

              {data.socials.map(({ url, label, Icon }) => (
                <MagneticButton
                  key={url}
                  href={url}
                  iconOnly
                  aria-label={label}
                  className='border-transparent'
                >
                  <Icon className='absolute size-2/3' />
                </MagneticButton>
              ))}
            </div>

            <Text
              small
              className='block mt-4 px-4'
            >
              {data.legalPages.map(({ id, label }) => (
                <Fragment key={id}>
                  <Link href={`/legal/${id}`} className='text-placeholder hover:underline'>
                    {label}.
                  </Link>{' '}
                </Fragment>
              ))}
            </Text>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer>
  );
};
