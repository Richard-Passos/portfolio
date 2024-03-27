import { globalsApi } from '@/api';

import MenuUiContent from '../ui/menu/Content';
import Nav from './Nav';
import { Logo, Separator } from '../ui';
import { Suspense } from 'react';
import Language from '../language';
import DotsLoader from '../dots-loader';
import SocialNav from '../social-nav';

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
          <Language className='bg-primary' />
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
    </MenuUiContent>
  );
};

export default MenuContent;
