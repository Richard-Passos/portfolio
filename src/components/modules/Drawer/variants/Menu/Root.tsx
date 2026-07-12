import data from './.data';
import { Fragment } from 'react';

import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import Drawer, { type DrawerProps } from '@/components/modules/Drawer';
import { Link } from '@/components/navigation/Link';
import { LocaleMenu } from '@/components/navigation/Menu/variants/Locale';
import { NavTabs, NavTabsProps } from '@/components/navigation/Tabs/variants/Nav';
import { Text } from '@/components/system/Text';
import { MergeProps } from '@/types/MergeProps';

import { MenuDrawerTrigger, MenuDrawerTriggerMobile } from './Trigger';

export type MenuDrawerProps = MergeProps<{ nav: NavTabsProps['items'] }, DrawerProps>;

export const MenuDrawer = async ({ nav, ...props }: MenuDrawerProps) => {
  return (
    <Drawer
      swipeDirection='end'
      modal={false}
      trapFocus={false}
      preventScroll
      {...props}
    >
      <MenuDrawerTriggerMobile className='md:hidden'>{data.menu.label}</MenuDrawerTriggerMobile>

      <MenuDrawerTrigger data={{ open: data.menu.open, close: data.menu.close }} />

      <Drawer.Backdrop />

      <Drawer.Positioner className='z-40'>
        <Drawer.Content className='flex max-w-xl grow flex-col border-l p-10'>
          <Drawer.Title className='border-b px-2 py-4'>{data.menu.label}</Drawer.Title>

          <NavTabs
            id='menu-drawer'
            items={nav}
            data-autofocus
            orientation='vertical'
            className='mx-4 my-8 text-4xl [&_a]:h-16!'
          />

          <div className='mt-auto flex flex-wrap px-4'>
            <LocaleMenu className='mr-2.5' />

            {data.socials.map(({ url, label, icon }) => (
              <MagneticButton
                key={url}
                href={url}
                iconOnly
                aria-label={label}
              >
                {icon}
              </MagneticButton>
            ))}
          </div>

          <Text
            small
            className='mt-4 block px-4'
          >
            {data.legalPages.map(({ id, label }) => (
              <Fragment key={id}>
                <Link
                  href={`/legal/${id}`}
                  className='text-placeholder hover:underline'
                >
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
