import { LocaleSelect } from '@/components/molecules';
import Logo from '@/components/organisms/Logo';
import { defaultPages, locales } from '@/constants';
import { getLocale, headerApi, pagesApi } from '@/utils/actions';

import HeaderMenu from '../Menu';
import HeaderNav, { HeaderNavProps } from '../Nav';

const HeaderContentOrganism = async () => {
  const locale = await getLocale();

  const [headerRes, pagesRes] = await Promise.all([
    headerApi.get({ locale }),
    pagesApi.get({ locale, isSelected: true })
  ]);

  if (!headerRes.ok) return null;

  const header = headerRes.data;

  const navItem: HeaderNavProps['items'] = pagesRes.ok
    ? pagesRes.data.map((p) => ({
        href: `/${p.slug === defaultPages.home ? '' : p.slug}`,
        label: `${p.label}`
      }))
    : [];

  return (
    <>
      <Logo />

      <div className='flex items-center gap-2.5 max-md:hidden'>
        <HeaderNav items={navItem} />

        <LocaleSelect
          aria-label={header.locale.label}
          data={locales}
        />
      </div>

      <HeaderMenu />
    </>
  );
};

export default HeaderContentOrganism;
