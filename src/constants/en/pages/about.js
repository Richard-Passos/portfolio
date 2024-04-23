import globals from '../globals';

const aboutPage = {
  slug: 'about',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: `Heart conquer\n-ing person`,
        subtitle: 'Gotta know more',
        icons: [
          { src: '/images/smile.svg', title: 'Smile' },
          { src: '/images/globe.svg', title: 'Globe' },
          { src: '/images/rocket.svg', title: 'Rocket' },
        ],
        images: [
          {
            src: '/images/parallax-00.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
          {
            src: '/images/parallax-01.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
          {
            src: '/images/parallax-02.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
        ],
      },
    },
    {
      slug: 'background',
      theme: 'dark',
      data: {
        title: ['Who I am'],
        subtitle: 'Just someone who wanna conquer hearts.',
        description:
          "I'm Richard an awesome full stack developer based in Brazil. When I'm not coding, you can catch me in the gaming world — I'm a huge fan, especially when it comes to rogue-like games.",
        blocks: [
          {
            items: [
              {
                title: 'Background',
                description: `I have always been someone dedicated and studious, but up to a certain point, I never knew what I really wanted, couldn't imagine my future, someone without dreams. That didn't really bother me, perhaps due to a lack of sense of reality, but after certain experiences, like work and relationships, I realized that I needed dreams, I needed to find something that motivated me. After hours of research, truly pursuing something meaningful, I found development. \nIt was like a light bulb moment; when I read about what it involved, about what it meant to be a developer, I knew that's what I desired, a profession so enchanting that it fit me perfectly. Having found my goal, I began to dedicate myself insanely to make up for lost time, to recover years without dreams. Now I have my dreams, purposes, and I know exactly where I wanna be.`,
              },
            ],
            image: {
              src: '/images/parallax-00.jpg',
              alt: '',
              width: 2491,
              height: 3737,
            },
            icon: {
              src: '/images/smile.svg',
              title: 'Smile',
            },
          },
          {
            items: [
              {
                title: 'Personality',
                description:
                  "I'm an analytical and self-taught person, standing out for my dedication. I have a synthetic and critical approach, where I turn complex information into intelligent and effective decisions. This approach not only simplifies the decision-making process but also allows me to find innovative solutions amidst apparent chaos.",
              },
              {
                title: 'Mission',
                description:
                  "I've a mission to learn, cultivate, and make the most of. Learn from life and from people, from my successes and mistakes. Cultivate genuine relationships along the way. Make the most of opportunities and moments that life brings.",
              },
            ],
            image: {
              src: '/images/parallax-00.jpg',
              alt: '',
              width: 2491,
              height: 3737,
            },
            icon: {
              src: '/images/globe.svg',
              title: 'Globe',
            },
          },
        ],
      },
    },
    {
      slug: 'values',
      theme: 'light',
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
            .values.personal,
          },
          icons: [
            { src: '/images/smile.svg', title: 'Smile' },
            { src: '/images/globe.svg', title: 'Globe' },
          ],
      },
    },
    {
      slug: 'next-page',
      theme: 'dark',
      data: {
        title: 'Next page',
        description: 'Contact ·',
        action: {
          icon: {
            src: '/images/arrow-up-right.svg',
          },
          data: {
            label: 'Go to contact page',
            href: '/contact',
            variants: {
              color: 'main',
            },
          },
        },
      },
    },
  ],
  metadata: {
    title: 'About',
    description:
      'About Richard Passos, his background, personality, mission and values.',
  },
};

export default aboutPage;
