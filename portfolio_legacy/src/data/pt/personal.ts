import { Personal } from '@/types';

const personal: Personal = {
  name: {
    first: 'Richard',
    last: 'Passos'
  },
  email: 'richard.ac.passos12@gmail.com',
  title: 'Richard Passos um ótimo Desenvolvedor Full Stack',
  description:
    'Ajudando marcas a alcançar o destaque digital. Localizado no Brasil. Trago uma paixão por tecnologia de ponta e criação de soluções impactantes centradas no usuário.',
  availability: 'Indisponível para trabalhar',
  authors: [
    {
      name: 'Richard Passos',
      url: 'https://github.com/Richard-Passos'
    }
  ],
  keywords:
    'Richard Passos, Portfólio, Desenvolvedor Full Stack, React.js, Node.js, React Native, Next.js, TypeScript, JavaScript, Jest, MongoDB, Git, TailwindCSS, Styled-components, Resolução de problemas, Orientado a detalhes, Comunicação, Adaptabilidade, Gestão de tempo, Pensamento crítico, Pensamento sintético',
  location: {
    country: 'Brasil',
    state: 'RS',
    gmt: 'GMT-3'
  },
  socials: [
    {
      id: 'github',
      href: 'https://github.com/Richard-Passos',
      icon: '/icons/github.svg',
      label: 'Github'
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/richardp.dev/',
      icon: '/icons/instagram.svg',
      label: 'Instagram'
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/richardp-dev',
      icon: '/icons/linkedin.svg',
      label: 'Linkedin'
    }
  ],
  buyCoffee: {
    icon: '/icons/mug.svg',
    href: 'https://www.buymeacoffee.com/richardp.dev'
  }
};

export { personal };
