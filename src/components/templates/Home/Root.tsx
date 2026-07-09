import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { PrimaryHero, PrimaryHeroProps } from '@/components/layout/Heros/Primary';
import { Section } from '@/components/layout/Section';
import { ReviewTitleOnScroll } from '@/components/motion/Title/ReviewOnScroll';
import { type ReactNode } from 'react';

export type HomeTemplateProps = {
  data: {
    hero: PrimaryHeroProps['data'],
    title: ReactNode,
    code: ReactNode,
    action: {
      label: ReactNode
    },
  }
};

export const HomeTemplate = ({ data }: HomeTemplateProps) => {
  return <>
    <PrimaryHero theme='light' data={data.hero}/>

    <Section theme='dark'>
      <div className='h-[175dvh] relative w-full px-32 overflow-x-clip'>
        <div className='sticky top-0 h-dvh flex items-center w-full'>
          <ReviewTitleOnScroll>
            <h1 className='text-[clamp(8rem,20vw,22rem)] leading-0 font-bold w-max text-muted text-nowrap' >{data.title}</h1>
          </ReviewTitleOnScroll>
        </div>
      </div>

      <code>{data.code}</code>

      <MagneticButton color='primary' className='mt-4'>{data.action.label}</MagneticButton>
    </Section>
    
    <Section theme='light'>
      <div className='h-[175dvh] relative w-full px-32 overflow-x-clip'>
        <div className='sticky top-0 h-dvh flex items-center w-full'>
          <ReviewTitleOnScroll>
            <h1 className='text-[clamp(8rem,20vw,22rem)] leading-0 font-bold w-max text-muted text-nowrap' >{data.title}</h1>
          </ReviewTitleOnScroll>
        </div>
      </div>

      <code>{data.code}</code>

      <MagneticButton color='primary' className='mt-4'>{data.action.label}</MagneticButton>
    </Section>
  </>
};    