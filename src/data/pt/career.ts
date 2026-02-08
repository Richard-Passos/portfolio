import { Career } from '@/types';

const career = async (): Promise<Career[]> => {
  return [
    {
      slug: 'napead',
      title: 'NAPEAD UFRGS Intern — Multimedia Production for Education',
      roles: ['Web dev'],
      year: '2025 - present',
      description:
        'Portal-EAD is a web portal developed for a web developer selection process at SEAD/UFRGS. The project demonstrates proficiency in HTML, CSS, JavaScript, and Bootstrap, with additional functionality implemented using TypeScript for strong typing and safe DOM manipulation.'
    },
    {
      slug: 'ufrgs',
      title: 'UFRGS Student — Computer Science',
      roles: ['development'],
      year: '2025 - present',
      description:
        'A missing portfolio limits opportunities; I designed and built a personal portfolio to showcase skills, career, and experience, offering a professional platform to attract potential clients and employers.'
    }
  ];
};

export default career;
