import { Suspense } from 'react';

import { globalsApi } from '@/api';
import { cn } from '@/utils';

import { magneticButtonSizes } from '../button/Magnetic';
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
        <div className='relative w-full'>
          <Nav
            className='w-full max-w-none flex-col p-md'
            items={data.navItems}
          />
          <GridPattern />

          <div className='pointer-events-none absolute bottom-0 left-1/2 aspect-[4] w-full -translate-x-1/2 overflow-hidden'>
            <Logo
              aria-hidden
              tabIndex={-1}
              className='absolute inset-x-0 top-0 h-auto translate-x-0 touch-none select-none p-0 opacity-[.035]'
            />
          </div>
        </div>

        <div className='relative flex w-fit shrink-0 flex-col justify-between overflow-hidden border-l p-sm shadow-[-10px_0_20px_-5px] shadow-[hsl(var(--muted)/.1)]'>
          <div className='mb-md ml-auto flex items-center gap-8 px-sm max-sm:hidden'>
            <div className='flex h-10 items-center'>
              <Logo />

              <Separator
                className='mr-4'
                orientation='vertical'
              />

              <Suspense fallback={<DotsLoader />}>
                <Language />
              </Suspense>
            </div>

            <div
              className={cn('invisible aspect-square', magneticButtonSizes.md)}
            />
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
