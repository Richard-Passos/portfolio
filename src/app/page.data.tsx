import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { GlobeIcon } from '@/components/system/Icon/Globe';
import { RocketIcon } from '@/components/system/Icon/Rocket';
import { FlashIcon } from '@/components/system/Icon/Flash';
import { CapIcon } from '@/components/system/Icon/Cap';
import { SmileIcon } from '@/components/system/Icon/Smile';
import { HomeTemplateProps } from '@/components/templates/Home';
import { FingerprintIcon } from '@/components/system/Icon/Fingerprint';
import { CONTACT } from '@/common/CONTACT';
import { LOCATION } from '@/common/LOCATION';
import { VALUES } from '@/common/VALUES';
import { GameControllerIcon } from '@/components/system/Icon/GameController';
import { HandHornsIcon } from '@/components/system/Icon/HandHorns';

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
  },
  projects: {
    title: (
      <>
        Alguns dos <b>meus projetos</b>
      </>
    ),
    text: null
  },
  but: {
    title: 'MAS',
    text: (
      <>
        <span>Nem tudo</span> <span className='ml-auto'>é tecnologia</span>
      </>
    ),
    icon: <FingerprintIcon />
  },
  about: {
    title: (
      <>
        Visão <em>da</em> Pessoa
      </>
    ),
    items: {
      about: {
        badge: '#sobre',
        text: (
          <>
            <p>
              <b>
                <HandHornsIcon /> Oi —
              </b>{' '}
              sou alguém que gosta de passar meu tempo com amigos e família, mas grande parte do meu
              lazer está nos jogos — rogue-like, souls-like, metroidvania, precision platformer, ...
              — que me desafiam e me divertem. Mesmo sendo mais reservado, valorizo a integridade e
              a simpatia na forma de me conectar com os outros.
            </p>

            <p>
              Acredito em aproveitar também os pequenos momentos — seja sentindo o sol no rosto,
              jogando uma partida intensa ou uma boa conversa, são esses momentos que realmente
              importam.
            </p>
          </>
        )
      },
      location: {
        icon: <GlobeIcon />,
        title: `Localizado no ${LOCATION.country} ${LOCATION.gmt}`
      },
      values: {
        icon: <FingerprintIcon />,
        title: 'Meus valores',
        items: VALUES
      },
      better: {
        icon: <RocketIcon />,
        text: 'Melhorando um pouco a cada dia.'
      },
      love: {
        icon: <GameControllerIcon />,
        text: 'Adoro jogar video-game.'
      },
      time: {
        title: 'Meu horário local'
      },
      contact: {
        url: CONTACT.buyCoffee.url,
        icon: CONTACT.buyCoffee.icon,
        title: 'Me compre um café'
      }
    }
  }
} satisfies HomeTemplateProps['data'];
