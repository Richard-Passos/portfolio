import { aboutTemplateSchema } from '@/data/template/schemas';
import { createTemplateData, createTemplateMetadata } from '@/utils';

import { values } from '../values';

const metadata = createTemplateMetadata({
  title: 'Sobre',
  description:
    'Explore a jornada de um desenvolvedor full stack: minha história, hobbies, missão, valores e personalidade.'
});

const data = createTemplateData<typeof aboutTemplateSchema>({
  hero: {
    title: [
      {
        text: 'Mais sobr'
      },
      {
        text: 'e',
        emphasize: true
      },
      {
        text: ' mim'
      },
      {
        text: '!',
        emphasize: true
      }
    ]
  },
  images: {
    items: [
      {
        src: '/images/bg.webp',
        alt: 'Richard Passos, um desenvolvedor full stack com cabelo curto, está contra uma parede de madeira, vestindo uma camiseta clara. Richard Passos está com os braços cruzados, mostrando um relógio e um colar.'
      },
      {
        src: '/images/selfie.webp',
        alt: 'Richard Passos, desenvolvedor full-stack de cabelo curto e escuro, vestindo uma camisa vermelha, jaqueta preta e colar prateado, está em frente a um mural abstrato colorido.'
      },
      {
        src: '/images/bg.webp',
        alt: 'Richard Passos, um desenvolvedor full stack vestindo um moletom cinza claro com "Brooklyn" e outros textos impressos, está contra uma parede de madeira, olhando para a esquerda.'
      }
    ]
  },
  about: {
    title: [
      { text: 'Quem ' },
      {
        text: 'sou',
        emphasize: true
      }
    ],
    texts: [
      {
        id: 'intro',
        title: [{ text: 'Introdução' }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Sempre fui curioso e dedicado, mas por um tempo me senti sem uma direção clara. Começar na UFRGS e me aprofundar no desenvolvimento foi um ponto de virada: descobri algo que realmente me motiva e me desafia.'
              }
            ]
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'Hoje, estou apenas no início de um caminho longo, cheio de aprendizado e oportunidades. Cada projeto, cada linha de código e cada pessoa que conheço, me dão ainda mais certeza de que estou no caminho certo.'
              }
            ]
          }
        ]
      },
      {
        id: 'personality',
        title: [{ text: 'Personalidade' }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Sou uma pessoa curiosa e autodidata que adora explorar novas perspectivas e culturas. Sabendo sempre aproveitar os pequenos detalhes da vida.'
              }
            ]
          }
        ]
      },
      {
        id: 'mission',
        title: [{ text: 'Missão' }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Tenho uma missão de aprender, cultivar e aproveitar ao máximo. Aprender com a vida e as pessoas. Cultivar relacionamentos genuínos. Aproveitar ao máximo as oportunidades e os momentos.'
              }
            ]
          }
        ]
      },
      {
        id: 'hobbies',
        title: [{ text: 'Hobbies' }],
        description: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Jogar, assistir séries/filmes, melhorar habilidades, conhecer novas culturas e aproveitar momentos de qualidade com amigos e familiares.'
              }
            ]
          }
        ]
      }
    ]
  },
  values: {
    title: [
      {
        text: 'Meus valores'
      }
    ],
    templates: {
      base: ['item-0', 'item-1', 'item-2', 'item-3'],
      sm: ['item-0 item-1', 'item-2 item-3'],
      lg: ['item-0 item-1 .', '. item-2 item-3']
    },
    items: values,
    icons: {
      left: {
        src: '/icons/smile.svg',
        animation: 'rotateRight',
        y: 'bottom'
      },
      right: {
        src: '/icons/globe.svg',
        animation: 'rotateLeft',
        y: 'top'
      }
    }
  }
});

export { data, metadata };
