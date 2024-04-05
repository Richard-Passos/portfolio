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
        subtitle: 'Just someone who wanna conquer minds and hearts.',
        description:
          "I'm Richard an awesome full stack developer based in Brazil. When I'm not coding, you can catch me in the gaming world — I'm a huge fan, especially when it comes to rogue-like games.",
        block:
          {
            title: 'Background',
            description:
              "I have always been someone dedicated and studious, but up to a certain point, I never knew what I really wanted, couldn't imagine my future, someone without dreams. That didn't really bother me, perhaps due to a lack of sense of reality, but after certain experiences, like work and relationships, I realized that I needed dreams, I needed to find something that motivated me. After hours of research, truly pursuing something meaningful, I found development. It was like a light bulb moment; when I read about what it involved, about what it meant to be a developer, I knew that's what I desired, a profession so enchanting that it fit me perfectly. Having found my goal, I began to dedicate myself insanely to make up for lost time, to recover years without dreams. Now I have my dreams, purposes, and I know where I wanna go.",
            image: {
              src: '/images/parallax-00.jpg',
              alt: '',
              width: 2491,
              height: 3737,
            },
          },
      },
    },
    {
      slug: 'extra',
      theme: 'light',
      data: {
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
        ],
        items: [
          {
            title: 'Personality',
            description:
              "I'm an analytical and self-taught person, standing out for my dedication. I have a synthetic approach, where I turn complex information into intelligent and effective decisions. This approach not only simplifies the decision-making process but also allows me to find innovative solutions amidst apparent chaos",
          },
          {
            title: 'Mission',
            description:
              "I've a mission to learn, cultivate, and make the most of. Learn from life and from people, from my successes and mistakes. Cultivate genuine relationships along the way. Make the most of opportunities and moments that life brings.",
          },
        ],
      },
    },
    {
      slug: 'values',
      theme: 'light',
      data: {
        title: `My \nvalues`,
        subtitle: 'Always improving',
        items: [
          {
            icon: {
              src: '/images/shield.svg',
              alt: 'Integrity icon',
              width: 150,
              height: 150,
            },
            title: 'Integrity',
            description:
              'I remain true to my values, striving to act with honesty and transparency. This allows me to build solid and genuine relationships.',
          },
          {
            icon: {
              src: '/images/globe.svg',
              alt: 'Curiosity icon',
              width: 150,
              height: 150,
            },
            title: 'Curiosity',
            description:
              'My innate curiosity drives me to explore new ideas and discover new paths. Every challenge is an opportunity for learning and personal growth.',
          },
          {
            icon: {
              src: '/images/puzzle.svg',
              alt: 'Respect icon',
              width: 150,
              height: 150,
            },
            title: 'Respect',
            description:
              'I deeply value the people around me and their unique stories. I am always open to listening and learning from others, recognizing the importance of each voice and experience.',
          },
          {
            icon: {
              src: '/images/smile.svg',
              alt: 'Gratitude icon',
              width: 150,
              height: 150,
            },
            title: 'Gratitude',
            description:
              'I cultivate a mindset of gratitude, recognizing and appreciating the little things in life. Gratitude keeps me focused and inspires me to live with purpose and fulfillment.',
          },
        ],
      },
    },
    {
      slug: 'next-page',
      theme: 'dark',
      data: {
        text: 'Contact',
        href: '/contact',
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
