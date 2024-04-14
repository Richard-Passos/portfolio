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
          'Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and a commitment to transforming ideas into impactful, user-centric solutions.',
        text: globals.find((data) => data.slug === 'personal-info')?.data.availability,
        icon: { src: '/images/smile.svg', title: 'Smile' },
      },
    },
    {
      slug: 'mission',
      theme: 'dark',
      id: 'scrollTo',
      data: {
        description:
          "That's my mission — Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit doloremque aspernatur architecto dolor eos. Harum minima modi deserunt culpa commodi! Facilis eveniet ad illo delectus?",
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
          'We help our clients entertain, inform, and inspire the world.',
        description:
          'We represent storytellers who shape culture and drive the future. From artists and creators to athletes and brands, our deep expertise and broad capabilities enable talent and companies to confidently grow their careers and businesses.',
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
          items: globals.find((data) => data.slug === 'personal-info')?.data.services,
        },
      },
    },
    {
      slug: 'projects',
      theme: 'light',
      data: {
        title: ['Selected', 'works'],
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit dolores adipisci voluptates dolore inventore aperiam rerum possimus culpa nemo molestiae!',
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
          'We help our clients entertain, inform, and inspire the world.',
        description:
          'We represent storytellers who shape culture and drive the future. From artists and creators to athletes and brands, our deep expertise and broad capabilities enable talent and companies to confidently grow their careers and businesses.',
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
          items: globals.find((data) => data.slug === 'personal-info')?.data.stats,
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
        subtitle: 'Always improving',
        block: {
          items: globals.find((data) => data.slug === 'personal-info')?.data.values
            .work,
          icons: [
            { src: '/images/globe.svg', title: 'Globe' },
            { src: '/images/smile.svg', title: 'Smile' },
          ],
        },
      },
    },
    {
      slug: 'next-page',
      theme: 'dark',
      data: {
        title: 'Next page',
        description: 'About ·',
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
