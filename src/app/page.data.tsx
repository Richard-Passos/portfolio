import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate/OnScroll';
import { GlobeIcon } from '@/components/system/Icon/Globe';
import { RocketIcon } from '@/components/system/Icon/Rocket';
import { BoltIcon } from '@/components/system/Icon/Bolt';
import { CapIcon } from '@/components/system/Icon/Cap';
import { SmileIcon } from '@/components/system/Icon/Smile';
import { HomeTemplateProps } from '@/components/templates/Home';
import { LOCATION } from '@/common/LOCATION';
import { GameControllerIcon } from '@/components/system/Icon/GameController';
import { SparklesIcon } from '@/components/system/Icon/Sparkles';
import { TrophyIcon } from '@/components/system/Icon/Trophy';
import { SKILLS } from '@/common/SKILLS';

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
      icon: <BoltIcon />,
      title: 'Disponível para Trabalho',
      text: 'Aberto a oportunidades de estágio, freelance e projetos onde eu possa construir algo que faça diferença.'
    },
    center: {
      icon: <SmileIcon />,
      title: 'Quem? Por quê? Mais?',
      text: 'Sou Richard Passos, desenvolvedor web e estudante. Faço a diferença linha por linha e acredito que grandes projetos nascem da dedicação aos pequenos detalhes O resto da história está logo abaixo.'
    },
    right: {
      icon: <CapIcon />,
      title: 'Ciência da Computação @ UFRGS',
      text: 'Graduando na UFRGS, transformando teoria em projetos e aprendizado em experiência.'
    }
  },
  mission: {
    text: 'Essa é minha missão — Cada desafio, experiência, e linha de código é uma chance de fazer melhor. Cada projeto pode inspirar colegas, e a comunidade. Cada repetição faz a diferença, já que a excelência é apenas o limite para o qual convergimos.',
    items: [
      <>
        Melhorar{' '}
        <AnimateOnScroll config={rotateBothAnimation}>
          <RocketIcon />
        </AnimateOnScroll>
      </>,
      <>
        Inspirar{' '}
        <AnimateOnScroll config={rotateAnimation}>
          <GlobeIcon />
        </AnimateOnScroll>
      </>,
      <>
        Repetir{' '}
        <AnimateOnScroll config={rotateBothAnimation}>
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
  experience: {
    title: 'Experiência',
    text: 'Não fico no básico, busco entender pessoas, e problemas para construir soluções que fazem sentido.'
  },
  projects: {
    title: (
      <>
        Alguns dos <b>meus projetos</b>
      </>
    )
  },
  but: {
    title: 'MAS',
    text: (
      <>
        <span>Nem tudo</span> <span className='ml-auto'>é tecnologia</span>
      </>
    )
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
                <SparklesIcon className='text-warning' /> —
              </b>{' '}
              tento não deixar a vida entrar no piloto automático. Afinal, só temos uma. Gosto de
              prestar atenção nas pequenas coisas, de aproveitar uma boa conversa, sentir o sol na
              pele, aprender algo novo ou simplesmente parar para perceber detalhes que normalmente
              passariam despercebidos.
            </p>

            <p>
              Gosto de estar perto de pessoas que compartilham conhecimento sem deixar a humildade
              de lado. No fim, crescer junto sempre parece mais interessante do que crescer sozinho.
            </p>

            <p>
              Uma frase que sempre ficou comigo diz:{' '}
              <i>"Faça uma aposta de que o amor existe, e realize um ato de amor."</i>.
            </p>
          </>
        )
      },
      better: {
        icon: <RocketIcon />,
        text: 'Quero ser melhor do que fui ontem.'
      },
      love: {
        icon: <GameControllerIcon />,
        text: 'Adoro jogar video-game.'
      },
      location: {
        icon: <GlobeIcon />,
        title: `Localizado no ${LOCATION.country} ${LOCATION.gmt}`
      },
      hobbies: {
        icon: <TrophyIcon />,
        title: 'Fora do Código',
        text: (
          <>
            <p>
              Grande parte do meu tempo livre acaba nos videogames, principalmente aqueles que
              desafiam a paciência, a persistência e a vontade de melhorar. Também gosto de
              participar de hackathons e assistir talks, sempre em busca de novas ideias, pessoas e
              experiências.
            </p>

            <p>
              Mas nada substitui uma boa conversa ou passar um tempo com amigos e família. São
              momentos simples como esses que me fazem desacelerar, recarregar as energias e lembrar
              que a vida acontece muito além da tela.
            </p>
          </>
        )
      },
      gallery: {
        images: [
          {
            src: '/images/selfie_00.jpeg',
            alt: ''
          },
          {
            src: '/images/couple.jpeg',
            alt: ''
          },
          {
            src: '/images/selfie_01.jpeg',
            alt: ''
          },
          {
            src: '/images/lola.jpeg',
            alt: ''
          }
        ]
      }
    }
  },
  skills: {
    title: 'Hard Skills',
    items: SKILLS
  },
  cta: {
    title: 'CTA',
    text: 'Vamos juntos transformar ideias em soluções eficientes. Vamos fazer acontecer.'
  }
} satisfies HomeTemplateProps['data'];
