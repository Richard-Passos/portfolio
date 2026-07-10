import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { GlobeIcon } from '@/components/system/icons/Globe';
import { RocketIcon } from '@/components/system/icons/Rocket';
import { SmileIcon } from '@/components/system/icons/Smile';
import { HomeTemplateProps } from '@/components/templates/Home';

const rotateAnimation = {
  from: {
    rotate: 0,
  },
  to: {
    rotate: -360 * 2,
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
    title: <><span>Além de tech</span> <span className='ml-auto'>algoritmos <em>&</em></span> <span>resultados</span></>,
    description: 'Ajudando marcas a alcançar o destaque digital. Trago uma paixão por tecnologia de ponta e criação de soluções impactantes centradas no usuário.',
    left: <AnimateOnScroll {...rotateAnimation}><SmileIcon className='size-6'/></AnimateOnScroll>,
    right: `(${new Date().getFullYear()})`
  },   
  mission: {
    description: 'Essa é minha missão — Cada linha de código melhora minhas habilidades, criando soluções de alto impacto. Cada projeto é uma oportunidade para inspirar clientes, colegas e a comunidade. A repetição gera excelência, impulsionando o destaque digital.',
    items: [
      <>Melhorar <AnimateOnScroll {...rotateBothAnimation}><RocketIcon /></AnimateOnScroll></>,
      <>Inspirar <AnimateOnScroll {...rotateAnimation}><GlobeIcon /></AnimateOnScroll></>,
      <>Repetir <AnimateOnScroll {...rotateBothAnimation}><SmileIcon /></AnimateOnScroll></>,
    ]
  },
  career: {
    title: <>Visão <em>da</em> Carreira</>, 
  code: 'Hello There',
  action: {
    label: 'Magnetic'
  }
  }
} satisfies HomeTemplateProps['data'];