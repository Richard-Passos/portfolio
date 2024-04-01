import { Suspense } from 'react';

import { globalsApi } from '@/api';

import DotsLoader from '../dots-loader';
import GridPattern from '../grid-pattern';
import Language from '../language';
import SocialNav from '../social-nav';
import { Logo, Separator } from '../ui';
import MenuUiContent from '../ui/menu/Content';
import Nav from './Nav';

const MenuContent = async (props) => {
  const { data = {} } = await globalsApi.getOne('header'),
    personalInfo = (await globalsApi.getOne('personal-info')).data || {};

  return (
    <MenuUiContent
      data-lenis-prevent
      {...props}
    >
      <div className='relative flex size-full max-w-bounds overflow-y-auto overflow-x-clip 2xl:max-h-bounds'>
      <div className='relative flex w-fit shrink-0 flex-col justify-between overflow-hidden border-l p-sm shadow-[15px_0_35px_-15px] shadow-[hsl(var(--content)/.05)] [body:not(:has(.dark-layout))_&]:shadow-none'>
            <div className='flex h-10 px-sm items-center mb-lg'>
              <Logo />

              <Separator
                className='mr-4'
                orientation='vertical'
              />

              <Suspense fallback={<DotsLoader />}>
                <Language />
              </Suspense>
            </div>

          <SocialNav>
            {personalInfo.socials?.map((social, i) => (
              <SocialNav.Item
                index={i}
                key={social.href}
                {...social}
              />
            ))}
          </SocialNav>

          <GridPattern />
        </div>


          <Nav
            items={data.navItems}
          />
      </div>
    </MenuUiContent>
  );
};

export default MenuContent;
