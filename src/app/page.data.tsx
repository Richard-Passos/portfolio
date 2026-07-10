import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { GlobeIcon } from '@/components/system/icons/Globe';
import { RocketIcon } from '@/components/system/icons/Rocket';
import { FlashIcon } from '@/components/system/icons/Flash';
import { CapIcon } from '@/components/system/icons/Cap';
import { SmileIcon } from '@/components/system/icons/Smile';
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
      description:
        'Aberto a oportunidades de estágio, freelance e desenvolvimento de produtos digitais.'
    },
    center: {
      icon: <SmileIcon />,
      title: 'Quem? Por quê? Mais?',
      description:
        'Sou Richard Passos, desenvolvedor web, estudante e apaixonado por tecnologia. Gosto de resolver problemas e fazer a diferença linha por linha. O resto da história está logo abaixo.'
    },
    right: {
      icon: <CapIcon />,
      title: 'Ciência da Computação @ UFRGS',
      description:
        'Graduando na UFRGS, unindo base acadêmica sólida com experiência em projetos reais.'
    }
  },
  mission: {
    description:
      'Essa é minha missão — Cada linha de código melhora minhas habilidades, criando soluções de alto impacto. Cada projeto é uma oportunidade para inspirar clientes, colegas e a comunidade. A repetição gera excelência, impulsionando o destaque digital.',
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
    ),
    code: 'Hello There',
    action: {
      label: 'Magnetic'
    }
  }
} satisfies HomeTemplateProps['data'];
