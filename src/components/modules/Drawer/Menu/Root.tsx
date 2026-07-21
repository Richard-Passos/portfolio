import data from './.data';

import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import Drawer, { type DrawerProps } from '@/components/modules/Drawer';
import { LocaleMenu } from '@/components/navigation/Menu/variants/Locale';

import { MenuDrawerTrigger, MenuDrawerTriggerMobile } from './Trigger';

export type MenuDrawerProps = DrawerProps;

export const MenuDrawer = async ({ ...props }: MenuDrawerProps) => {
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

          <nav className='mx-4 my-8 flex flex-col'>
            {data.nav.map((el) => (
              <MagneticButton
                key={el.url}
                href={el.url}
                className='h-16 w-fit rounded-none text-4xl'
              >
                {el.label}
              </MagneticButton>
            ))}
          </nav>

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
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer>
  );
};
