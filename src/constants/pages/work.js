import globals from '../globals';
import projects from '../projects';
import skills from '../skills';

const workPage = {
  slug: 'work',
  sections: [
    {
      slug: 'hero',
      theme: 'light',
      data: {
        title: `Beyond code, \nboundaries <b>&</b> \nresults`,
        description:
          'Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and crafting high-impact, user-centered solutions.',
        text: globals.find((data) => data.slug === 'personal-info')?.data
          .availability,
        icon: { src: '/images/smile.svg', title: 'Smile' },
      },
    },
    {
      slug: 'mission',
      theme: 'dark',
      id: 'scrollTo',
      data: {
        description:
          "That's my mission — each line of code refines my skills, offering high-impact solutions. Every project inspires clients, coworkers, and community, fostering enduring positive impact. Consistent repetition breeds excellence, driving digital prominence.",
        items: [
          {
            text: 'Improve',
            icon: { src: '/images/rocket.svg', title: 'Rocket' },
          },
          {
            text: 'Inspire',
            icon: { src: '/images/globe.svg', title: 'Globe' },
          },
          {
            text: 'Repeat',
            icon: { src: '/images/smile.svg', title: 'Smile' },
          },
        ],
      },
    },
    {
      slug: 'services',
      theme: 'light',
      data: {
        title: ['Services'],
         subtitle:
          'I shape beyond boundaries solutions',
        description:
          "My solutions go beyond technological boundaries, they're not just algorithms and code. They are developed to generate high-impact results, driving you to digital prominence.",
        block: {
          title: 'I could help you with...',
          image: {
            src: '/images/parallax-00.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
          action: {
            type: '',
            icon: { src: '/images/arrow-up-right.svg' },
            animation: 'slideUpRight',
            data: {
              label: 'Contact me',
              href: '/contact',
              variants: {
                color: 'main',
              },
            },
          },
          items: globals.find((data) => data.slug === 'personal-info')?.data
            .services,
        },
      },
    },
    {
      slug: 'projects',
      theme: 'light',
      data: {
        title: ['Selected', 'works'],
        description:
          'Each project is a tailored masterpiece, meticulously crafted to engage users with intuitive interfaces, great interactions and captivating experiences.',
        block: {
          action: {
            type: '',
            icon: { src: '/images/plus.svg' },
            data: {
              label: 'More works',
              href: '/projects',
              variants: {
                color: 'main',
              },
            },
          },
          items: projects.filter((data) => data.isSelected),
        },
      },
    },
    {
      slug: 'why-me',
      theme: 'dark',
      data: {
        title: ['Why pick', 'me'],
        subtitle:
          'Turning heads and conquering hearts',
        description:
          "After head turning projects and a heart conquering personality just one click away, choose me to unlock boundless potential for your next project.",
        action: {
          type: '',
          icon: { src: '/images/arrow-up-right.svg' },
          animation: 'slideUpRight',
          data: {
            label: 'About me',
            href: '/about',
            variants: {
              color: 'main',
              size: 'sm',
            },
          },
        },
        block: {
          title: 'Some statistics...',
          items: globals.find((data) => data.slug === 'personal-info')?.data
            .stats,
        },
      },
    },
    {
      slug: 'skills',
      theme: 'light',
      data: [
        {
          title: `Hard \nskills`,
          subtitle: 'The best in market',
          actions: [
            {
              type: 'prev',
              icon: { src: '/images/arrow-left.svg' },
              data: {
                label: 'Previous skill',
              },
            },
            {
              type: 'next',
              icon: { src: '/images/arrow-right.svg' },
              data: {
                label: 'Next skill',
              },
            },
          ],
          items: skills.hard,
        },
        {
          title: `Soft \nskills`,
          subtitle: 'The best as person',
          actions: [
            {
              type: 'prev',
              icon: { src: '/images/arrow-left.svg' },
              data: {
                label: 'Previous skill',
              },
            },
            {
              type: 'next',
              icon: { src: '/images/arrow-right.svg' },
              data: {
                label: 'Next skill',
              },
            },
          ],
          items: skills.soft,
        },
      ],
    },
    {
      slug: 'values',
      theme: 'dark',
      data: {
        title: `My \nvalues`,
        subtitle: 'Elevating standards',
        grid: {
          templates: {
            default: '"item-0""item-1""item-2""item-3"',
            sm: '"item-0 item-1""item-2 item-3"',
            lg: '"item-0 item-1 ."". item-2 item-3"'
          },
          items: globals.find((data) => data.slug === 'personal-info')?.data
            .values.work,
          },
          icons: [
            { src: '/images/globe.svg', title: 'Globe' },
            { src: '/images/smile.svg', title: 'Smile' },
          ],
      },
    },
    {
      slug: 'next-page',
      theme: 'dark',
      data: {
        title: 'Next page',
        description: 'About me ·',
        action: {
          type: '',
          icon: {
            src: '/images/arrow-up-right.svg',
          },
          data: {
            label: 'Go to about page',
            href: '/about',
            variants: {
              color: 'main',
            },
          },
        },
      },
    },
  ],
  metadata: {
    title: 'Work',
    description:
      'Richard passos work details, his mission, services, some projects, skills and more.',
  },
};

export default workPage;
