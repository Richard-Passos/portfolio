import SOCIALS from '@/common/CONTACT.meta';
import { MagneticLink } from '@/components/navigation/Link/Magnetic';
import Drawer, { DrawerContentProps } from '@/components/modules/Drawer';
import LocaleMenu from '@/components/navigation/Menu/Locale';
import { useIntlayer } from 'next-intlayer/server';
import { cn } from '@/utils/cn';
import { MenuDrawerItem } from '@/components/modules/Drawer/Menu/Item';

export type MenuDrawerContentProps = DrawerContentProps;

export const MenuDrawerContent = ({ className, ...props }: MenuDrawerContentProps) => {
  const t = useIntlayer('menu-drawer');
  const socials = t.socials.map((s) => ({
    ...s,
    ...(SOCIALS[s.id as keyof typeof SOCIALS] ?? {})
  }));

  return (
    <>
      <Drawer.Backdrop
        data-menu-drawer-backdrop
        className='will-change-[opacity]'
      />

      <Drawer.Content
        data-menu-drawer-content
        className={cn(
          'max-w-xl border-l px-[calc(var(--w)*0.05)] py-8 will-change-transform sm:pt-24 sm:pb-16',
          className
        )}
        {...props}
      >
        <Drawer.Title className='border-b px-2 py-4'>{t.menu.label}</Drawer.Title>

        <nav className='mx-4 my-8 flex flex-col'>
          {t.nav.map((el) => (
            <MenuDrawerItem key={el.url}>
              <MagneticLink
                href={el.url}
                className='h-16 w-fit rounded-none text-4xl'
              >
                {el.label}
              </MagneticLink>
            </MenuDrawerItem>
          ))}
        </nav>

        <div className='mt-auto flex flex-wrap px-4'>
          <LocaleMenu>
            <LocaleMenu.Trigger className='mr-2.5' />

            <LocaleMenu.Content />
          </LocaleMenu>

          {socials.map(({ id, url, label, Icon }) => (
            <MagneticLink
              iconOnly
              key={id}
              href={url}
              aria-label={label}
            >
              <Icon />
            </MagneticLink>
          ))}
        </div>
      </Drawer.Content>
    </>
  );
};
