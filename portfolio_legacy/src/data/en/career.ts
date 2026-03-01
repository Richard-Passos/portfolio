import { Career } from '@/types';

const career: Record<string, Career> = {
  napead: {
    title: 'NAPEAD UFRGS Intern — Multimedia Production for Education',
    roles: ['Web dev'],
    year: {
      start: '2025',
      end: 'present'
    },
    description:
      'I was hired to redesign and modernize the Lumina learning platform, which previously functioned mainly as a static collection of links to external resources such as PDFs and videos. I led the transformation of this experience by rethinking both the visual layout and the underlying architecture.\n\nI developed a Moodle plugin system that allows courses to define their own global template themes, as well as dynamically generate templates with multilingual support and flexible, schema-driven content structures. This approach significantly improved usability, accessibility, and course engagement, enabling educators to adapt content to their pedagogical needs without technical barriers.'
  },
  ufrgs: {
    title: 'UFRGS Student — Computer Science',
    roles: ['development'],
    year: {
      start: '2025',
      end: 'present'
    },
    description:
      'Currently pursuing a degree in Computer Science with a focus on software development, algorithms, problem-solving. My academic work complements my professional experience in development, allowing me to apply theoretical concepts to real-world platforms and scalable digital environments.'
  }
};

export { career };
