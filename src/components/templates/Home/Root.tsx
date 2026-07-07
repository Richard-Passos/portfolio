import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { Section } from '@/components/layout/Section';
import { type ReactNode } from 'react';

export type HomeTemplateProps = {
  data: {
    title: ReactNode;
    code: ReactNode,
    action: {
      label: ReactNode
    },
  }
};

export const HomeTemplate = ({ data }: HomeTemplateProps) => {
  return <>
    <Section theme='light' forceTheme>
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