import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { PrimaryHero, PrimaryHeroProps } from '@/components/layout/Heros/Primary';
import { Section } from '@/components/layout/Section';
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
    <PrimaryHero theme='dark' data={data.hero}/>

    <Section theme='light'>
      <h1>{data.title}</h1>

    <code>{data.code}</code>

    <MagneticButton color='primary' className='mt-4'>{data.action.label}</MagneticButton>
    
    </Section>
    
    <Section theme='dark'>
      <h1>{data.title}</h1>

    <code>{data.code}</code>

    <MagneticButton color='primary' className='mt-4'>{data.action.label}</MagneticButton>
    </Section>
  </>
};    