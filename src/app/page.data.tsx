import { AnimateOnScroll } from '@/components/motion/Animate/OnScroll';
import { SmileIcon } from '@/components/system/icons/Smile';
import { HomeTemplateProps } from '@/components/templates/Home';
import { UseAnimateOnScrollOptions } from '@/hooks/useAnimateOnScroll';

const rotateAnimation = {
  from: {
    rotate: 0
  },
  to: {
    rotate: 360 * 2
  },
  start: 0,
  end: 'bottom top'
} satisfies UseAnimateOnScrollOptions['config']

export default {
  hero: {
    title: <><span>Além de tech</span> <span className='ml-auto'>algoritmos <em>&</em></span> <span>resultados</span></>,
    description: 'Ajudando marcas a alcançar o destaque digital. Trago uma paixão por tecnologia de ponta e criação de soluções impactantes centradas no usuário.',
    left: <AnimateOnScroll {...rotateAnimation}><SmileIcon className='size-6'/></AnimateOnScroll>,
    right: `(${new Date().getFullYear()})`
  },   
  title: 'Hi', 
  code: 'Hello There',
  action: {
    label: 'Magnetic'
  }
} satisfies HomeTemplateProps['data']; 