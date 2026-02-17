import { Page } from '@/types';

const pages: Record<string, Page> = {
  home: {
    isSelected: true,
    label: 'Início'
  },
  about: {
    isSelected: true,
    label: 'Sobre',
    metadata: {
      title: 'Sobre',
      description:
        'Explore a jornada de um desenvolvedor full stack: minha história, hobbies, missão, valores e personalidade.'
    }
  },
  contact: {
    isSelected: true,
    label: 'Contato',
    metadata: {
      title: 'Contato',
      description:
        'Entre em contato! Fale comigo através do formulário ou e-mail para discutir suas necessidades de projeto e explorar meus serviços de desenvolvimento full stack.'
    }
  },
  project: {
    type: 'project'
  },
  'not-found': {
    type: 'error',
    metadata: {
      title: 'Não Encontrado',
      description:
        'Ops! A página que você está procurando não existe. Explore meu portfólio para saber mais sobre meu trabalho como desenvolvedor full stack.'
    }
  },
  error: {
    type: 'error'
  },
  'cookies-policy': {
    type: 'legal',
    theme: 'dark',
    label: 'Política de Cookies',
    metadata: {
      title: 'Política de Cookies',
      description:
        'Descubra como usamos cookies para aprimorar sua experiência no Portfólio de Richard Passos. Aprenda sobre suas opções e nosso compromisso com a privacidade.'
    }
  },
  disclaimer: {
    type: 'legal',
    theme: 'dark',
    label: 'Isenção de Garantia',
    metadata: {
      title: 'Isenção de Garantia',
      description:
        'Explore nossa isenção de garantia, que delineia os limites de responsabilidade e obrigações ao usar o portfólio de Richard Passos. Transparência para sua tranquilidade.'
    }
  },
  'privacy-policy': {
    type: 'legal',
    theme: 'dark',
    label: 'Política de Privacidade',
    metadata: {
      title: 'Política de Privacidade',
      description:
        'Explore nossa política de privacidade, que descreve como protegemos seus dados e garantimos seus direitos enquanto você utiliza nossos serviços.'
    }
  },
  'terms-and-conditions': {
    type: 'legal',
    theme: 'dark',
    label: 'Termos e Condições',
    metadata: {
      title: 'Termos e Condições',
      description:
        'Explore os Termos e Condições para utilizar o portfólio de Richard Passos, garantindo transparência e segurança em sua experiência.'
    }
  }
};

export default pages;
