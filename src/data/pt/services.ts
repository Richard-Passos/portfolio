import { Service } from '@/types';

const services = async (): Promise<Service[]> => {
  return [
    {
      slug: 'frontend',
      title: 'Front End',
      description:
        'Desenvolvo interfaces de usuário com atenção aos detalhes, focando em interações suaves e micro animações envolventes.'
    },
    {
      slug: 'backend',
      title: 'Back End',
      description:
        'Construo sistemas back-end confiáveis, enfatizando a gestão eficiente de dados e soluções escaláveis para apoiar seu crescimento.'
    },
    {
      slug: 'fullstack',
      title: 'Full Stack',
      description:
        'Integro soluções de ponta a ponta usando tecnologias front e back end, entregando soluções completas.'
    }
  ];
};

export default services;
