import { Fragment } from 'react';

import { Icon, Link, Text } from '@/components/atoms';
import { DrawerRootProps } from '@/components/modules/Drawer';
import { Action, Drawer, LocaleSelect } from '@/components/molecules';
import { defaultPages, locales } from '@/constants';
import { DefaultPage, LegalPage } from '@/types';
import { MergeProps } from '@/types';
import { cn, entries } from '@/utils';
import { getLocale, headerApi, pagesApi, personalApi } from '@/utils/actions';

import HeaderNav, { HeaderNavProps } from '../Nav';
import HeaderMenuTrigger from './Trigger';

type HeaderMenuOwnProps = Partial<Pick<DrawerRootProps, 'trigger'>>;

type HeaderMenuProps = MergeProps<HeaderMenuOwnProps, DrawerRootProps>;

const HeaderMenu = async (props: HeaderMenuProps) => {
  const locale = await getLocale();

  const [headerRes, selectedPagesRes, legalPagesRes, personalRes] =
    await Promise.all([
      headerApi.get({ locale }),
      pagesApi.get({ locale, isSelected: true }),
      pagesApi.get({ locale, type: 'legal' }),
      personalApi.get({ locale })
    ]);

  if (!headerRes.ok) return null;

  const header = headerRes.data,
    personal = personalRes.ok ? personalRes.data : undefined,
    selectedPages = selectedPagesRes.ok
      ? (selectedPagesRes.data as Record<string, DefaultPage>)
      : undefined;

  const navItems: HeaderNavProps['items'] = entries(selectedPages).map(
    ([key, p]) => ({
      href: key === defaultPages.home ? '/' : `/${key}`,
      label: p.label
    })
  );

  const legalPages = legalPagesRes.ok
    ? (legalPagesRes.data as Record<string, LegalPage>)
    : undefined;

  const socials = personal?.socials;

  return (
    <Drawer.Root
      position='right'
      trapFocus={false}
      {...props}
      trigger={
        <>
          <HeaderMenuTrigger.Mobile className='md:hidden'>
            {header.menu.label}
          </HeaderMenuTrigger.Mobile>

          <HeaderMenuTrigger.Root
            label={{
              open: header.menu.open.label,
              close: header.menu.close.label
            }}
          />
        </>
      }
    >
      <Drawer.Content
        bodyProps={{
          className: 'flex grow flex-col p-0 pt-8'
        }}
        className={cn(
          `flex flex-col p-(--p) pt-[calc(var(--p)*1.5)] [--drawer-size:560px] [--p:--spacing(8)] sm:[--p:--spacing(16)]`
        )}
        hasCloseButton={false}
        headerProps={{
          className: 'relative border border-x-0 border-t-0 py-0'
        }}
        title={header.menu.title}
      >
        <HeaderNav
          className='mb-8 flex-col items-start'
          data-autofocus
          items={navItems}
          linkProps={{
            orientation: 'vertical',
            indicatorProps: {
              layoutId: 'headerMenuLinkActiveIndicator'
            }
          }}
        />

        <div className='mt-auto flex flex-wrap gap-4 px-4'>
          <LocaleSelect
            aria-label={header.locale.label}
            className='mt-1'
            data={locales}
          />
          <div className='flex flex-wrap items-center gap-2.5'>
            {socials?.map((data) => (
              <Action
                aria-label={data.label}
                as='link'
                href={data.href}
                isIconOnly
                key={data.href}
                variant='default'
              >
                <Icon
                  className='absolute size-2/3'
                  src={data.icon}
                />
              </Action>
            ))}
          </div>
        </div>

        <Text
          className='text-dimmed mt-4 block px-4 text-xs'
          component='small'
        >
          {entries(legalPages).map(([key, d]) => (
            <Fragment key={key}>
              <Link
                className='text-[1em] text-inherit'
                href={`/legal/${key}`}
              >
                {d.label}
              </Link>
              .{' '}
            </Fragment>
          ))}
        </Text>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export { HeaderMenu };
export type { HeaderMenuProps };
