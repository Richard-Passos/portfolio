import { Service } from '@/types';

const services = async (): Promise<Service[]> => {
  return [
    {
      slug: 'frontend',
      title: 'Front End',
      description:
        'I build user interfaces with attention to detail, focusing on smooth interactions and engaging micro animations.'
    },
    {
      slug: 'backend',
      title: 'Back End',
      description:
        'I build reliable back-end systems, emphasizing efficient data management and scalable solutions to support your growth.'
    },
    {
      slug: 'fullstack',
      title: 'Full Stack',
      description:
        'I integrate end-to-end solutions using cutting-edge front and back end technologies, providing complete solutions.'
    }
  ];
};

export default services;
