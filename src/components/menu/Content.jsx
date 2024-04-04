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
      <div className='relative flex max-md:flex-col size-full max-w-bounds overflow-y-auto overflow-x-clip 2xl:max-h-bounds'>
        <div className='relative flex md:w-fit shrink-0 flex-col justify-between overflow-hidden p-sm dark:!shadow-[hsl(var(--content)/.05)] dark:shadow-[0_15px_35px_-15px] md:dark:shadow-[15px_0_35px_-15px]'>
          <div className='md:mb-lg flex h-10 items-center px-sm'>
            <Logo />

            <Separator
              className='mr-4'
              orientation='vertical'
            />

            <Suspense fallback={<DotsLoader />}>
              <Language />
            </Suspense>
          </div>

          <SocialNav className='max-md:hidden'>
            {personalInfo.socials?.map((data, i) => (
              <SocialNav.Item
                index={i}
                key={data.href}
                data={data}
                />
            ))}
          </SocialNav>

          <GridPattern />
        </div>

        <Nav items={data.navItems} />
      </div>
    </MenuUiContent>
  );
};

export default MenuContent;
