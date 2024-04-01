import { globalsApi } from '@/api';

import MenuUiContent from '../ui/menu/Content';
import Nav from './Nav';
import { Logo, Separator } from '../ui';
import { Suspense } from 'react';
import Language from '../language';
import DotsLoader from '../dots-loader';
import SocialNav from '../social-nav';
import GridPattern from '../grid-pattern';
import { cn } from '@/utils';
import { magneticButtonSizes } from '../button/Magnetic';

const MenuContent = async (props) => {
  const { data = {} } = await globalsApi.getOne('header'),
   personalInfo = (await globalsApi.getOne('personal-info')).data || {};


  return (
    <MenuUiContent
      data-lenis-prevent
      {...props}
    >
            <div className='size-full relative max-w-bounds 2xl:max-h-bounds overflow-y-auto overflow-x-clip flex'>
              <div className='w-full relative'>
              <Nav className='p-md max-w-none flex-col w-full' items={data.navItems} />
  <GridPattern/>

   <div className='pointer-events-none absolute bottom-0 left-1/2 w-full aspect-[4] -translate-x-1/2 overflow-hidden'>
  <Logo
                aria-hidden
                tabIndex={-1}
                className='select-none touch-none h-auto p-0 translate-x-0 absolute opacity-[.035] inset-x-0 top-0'
              />
  </div>

              </div>

<div className='relative overflow-hidden border-l shadow-[-10px_0_20px_-5px] shadow-[hsl(var(--muted)/.1)] flex shrink-0 flex-col justify-between w-fit p-sm'>
<div className='flex ml-auto mb-md gap-8 items-center px-sm max-sm:hidden'>
  <div className='h-10 flex items-center'>
  <Logo />

<Separator
  className='mr-4'
  orientation='vertical'
/>

<Suspense fallback={<DotsLoader />}>
  <Language />
</Suspense>
  </div>

  <div className={cn('aspect-square invisible', magneticButtonSizes.md)}/>
</div>

<SocialNav className='mx-sm'>
          {personalInfo.socials?.map((social, i) => (
            <SocialNav.Item
              index={i}
              key={social.href}
              {...social}
            />
          ))}
        </SocialNav>

</div>
            </div>

    </MenuUiContent>
  );
};

export default MenuContent;
