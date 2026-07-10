import { ReactNode } from 'react';

import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { Mission, MissionProps } from '@/components/layout/Blocks/Mission';
import { PrimaryHero, PrimaryHeroProps } from '@/components/layout/Heros/Primary';
import { Section } from '@/components/layout/Section';
import { ReviewTitleOnScroll } from '@/components/motion/Title/ReviewOnScroll';

export type HomeTemplateProps = {
  data: {
    hero: PrimaryHeroProps['data'];
    mission: MissionProps['data'];
    career: {
      title: ReactNode;
      code: ReactNode;
      action: {
        label: ReactNode;
      };
    };
  };
};

export const HomeTemplate = ({ data }: HomeTemplateProps) => {
  return (
    <>
      <PrimaryHero
        theme='light'
        data={data.hero}
      />

      <Mission
        theme='dark'
        data={data.mission}
      />

      <Section theme='dark'>
        <div className='relative h-[175dvh] w-full overflow-x-clip px-[5%]'>
          <div className='sticky top-0 flex h-dvh w-full items-center'>
            <ReviewTitleOnScroll>
              <h1 className='w-max text-[clamp(8rem,20vw,22rem)] leading-0 font-semibold text-nowrap text-muted'>
                {data.career.title}
              </h1>
            </ReviewTitleOnScroll>
          </div>
        </div>
      </Section>

      <Section theme='light'>
        <div className='relative h-[175dvh] w-full overflow-x-clip px-[5%]'>
          <div className='sticky top-0 flex h-dvh w-full items-center'>
            <ReviewTitleOnScroll>
              <h1 className='w-max text-[clamp(8rem,20vw,22rem)] leading-0 font-bold text-nowrap text-muted'>
                {data.career.title}
              </h1>
            </ReviewTitleOnScroll>
          </div>
        </div>

        <code>{data.career.code}</code>

        <MagneticButton
          color='primary'
          className='mt-4'
        >
          {data.career.action.label}
        </MagneticButton>
      </Section>
    </>
  );
};
