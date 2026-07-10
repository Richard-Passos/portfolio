import { ReactNode } from 'react';

import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { Mission, MissionProps } from '@/components/layout/Blocks/Mission';
import { PrimaryHero, PrimaryHeroProps } from '@/components/layout/Heros/Primary';
import { Section } from '@/components/layout/Section';
import { ReviewTitleOnScroll } from '@/components/motion/Title/ReviewOnScroll';
import { Career, CareerProps } from '@/components/layout/Blocks/Career';

export type HomeTemplateProps = {
  data: {
    hero: PrimaryHeroProps['data'];
    mission: MissionProps['data'];
    career: CareerProps['data'];
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

      <Career
        theme='dark'
        data={data.career}
      />

      <Mission
        theme='light'
        data={data.mission}
      />

      <Career
        theme='light'
        data={data.career}
      />
    </>
  );
};
