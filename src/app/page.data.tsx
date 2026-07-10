import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { GlobeIcon } from '@/components/system/Icons/Globe';
import { RocketIcon } from '@/components/system/Icons/Rocket';
import { FlashIcon } from '@/components/system/Icons/Flash';
import { CapIcon } from '@/components/system/Icons/Cap';
import { SmileIcon } from '@/components/system/Icons/Smile';
import { HomeTemplateProps } from '@/components/templates/Home';

const rotateAnimation = {
  from: {
    rotate: 0
  },
  to: {
    rotate: -360 * 2
  },
  start: 0,
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

const rotateBothAnimation = {
  from: {
    rotate: 0,
    rotateX: 0
  },
  to: {
    rotate: 360 * 2,
    rotateX: 360
  },
  start: 0,
  end: 'bottom top'
} satisfies AnimateOnScrollConfig;

export default {
  hero: {
    title: (
      <>
        <span>Além de tech</span>{' '}
        <span className='ml-auto'>
          algoritmos <em>&</em>
        </span>{' '}
        <span>resultados</span>
      </>
    ),
    left: {
      icon: <FlashIcon />,
      title: 'Disponível para Trabalho',
      text: 'Aberto a oportunidades de estágio, freelance e desenvolvimento de produtos digitais.'
    },
    center: {
      icon: <SmileIcon />,
      title: 'Quem? Por quê? Mais?',
      text: 'Sou Richard Passos, desenvolvedor web, estudante e apaixonado por tecnologia. Gosto de resolver problemas e fazer a diferença linha por linha. O resto da história está logo abaixo.'
    },
    right: {
      icon: <CapIcon />,
      title: 'Ciência da Computação @ UFRGS',
      text: 'Graduando na UFRGS, unindo base acadêmica sólida com experiência em projetos reais.'
    }
  },
  mission: {
    text: 'Essa é minha missão — Cada desafio, experiência, e linha de código é uma chance de fazer melhor. Cada projeto pode inspirar colegas, e a comunidade. Cada repetição faz a diferença, já que a excelência é apenas o limite para o qual convergimos.',
    items: [
      <>
        Melhorar{' '}
        <AnimateOnScroll {...rotateBothAnimation}>
          <RocketIcon />
        </AnimateOnScroll>
      </>,
      <>
        Inspirar{' '}
        <AnimateOnScroll {...rotateAnimation}>
          <GlobeIcon />
        </AnimateOnScroll>
      </>,
      <>
        Repetir{' '}
        <AnimateOnScroll {...rotateBothAnimation}>
          <SmileIcon />
        </AnimateOnScroll>
      </>
    ]
  },
  career: {
    title: (
      <>
        Visão <em>da</em> Carreira
      </>
    )
  }
} satisfies HomeTemplateProps['data'];
