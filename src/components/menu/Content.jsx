import { globalsApi } from '@/api';

import MenuUiContent from '../ui/menu/Content';
import Nav from './Nav';
import { Logo, Separator } from '../ui';
import { Suspense } from 'react';
import Language from '../language';
import DotsLoader from '../dots-loader';
import SocialNav from '../social-nav';
import GridPattern from '../grid-pattern';

const MenuContent = async (props) => {
  const { data = {} } = await globalsApi.getOne('header'),
   personalInfo = (await globalsApi.getOne('personal-info')).data || {};


  return (
    <MenuUiContent
      data-lenis-prevent
      {...props}
    >
      <div className='flex h-10 items-center max-sm:hidden'>
        <Logo />

        <Separator
          className='mr-4'
          orientation='vertical'
        />

        <Suspense fallback={<DotsLoader />}>
          <Language />
        </Suspense>
      </div>

      <Nav items={data.navItems} />
      
      <SocialNav className='ml-auto'>
                {personalInfo.socials?.map((social, i) => (
                  <SocialNav.Item
                    index={i}
                    key={social.href}
                    {...social}
                  />
                ))}
              </SocialNav>

              <Logo
                aria-hidden
                tabIndex={-1}
                className='pointer-events-none select-none touch-none absolute bottom-0 left-1/2 -z-10 h-auto -translate-x-1/2 translate-y-1/2 px-0 text-[calc(var(--w)*.4)]/[1] font-extrabold text-muted [--w:100vw] 2xl:[--w:--max-w]'
              />

              <GridPattern/>
    </MenuUiContent>
  );
};

export default MenuContent;
