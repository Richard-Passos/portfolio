const globals = [
  {},
  {
    slug: 'header',
    navItems: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Work',
        href: '/work',
      },
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
  {
    slug: 'personal-info',
    name: {
      first: 'Richard',
      last: 'Passos',
    },
    email: 'hi.richardp@gmail.com',
    job: 'Full stack developer',
    location: {
      country: 'Brazil',
      state: 'RS',
      gmt: 'GMT-3',
    },
    logo: {
      src: '/images/logo.svg',
      alt: 'Richard Passos logo',
      width: 220,
      height: 110,
    },
    socials: [
      {
        icon: { src: '/images/github.svg' },
        label: 'Github',
        href: 'https://github.com/Richard-Passos',
      },
      {
        icon: { src: '/images/instagram.svg' },
        label: 'Instagram',
        href: 'https://www.instagram.com/richardp.dev',
      },
      {
        icon: { src: '/images/linkedin.svg' },
        label: 'Linkedin',
        href: 'https://www.linkedin.com/in/richardp-dev',
      },
    ],
    buyCoffee: {
      label: 'Buy me a coffee',
      href: 'https://www.buymeacoffee.com/richardp.dev',
    },
    availability: 'Available to work',
    services: [
      {
        title: 'Front end',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio corporis sequi, dolores nostrum, praesentium omnis commodi sint enim ducimus molestiae necessitatibus consequatur et fugiat nobis magnam asperiores culpa harum?',
      },
      {
        title: 'Back end',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem culpa dolor vel rerum! Quaerat delectus earum tempore accusamus itaque mollitia asperiores voluptate ea. Labore, officiis quae ad dolorum ea temporibus.',
      },
      {
        title: 'Full stack',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad delectus dolore, veniam accusamus beatae nulla sequi numquam alias rerum vel, distinctio vero dolor necessitatibus commodi cum debitis porro, maxime ratione.',
      },
    ],
    stats: [
      {
        title: '10ᐩ',
        description: `Projects \ncompleted`,
      },
      {
        title: '1ᐩ',
        description: `Years of \nexperience`,
      },
      {
        title: '100%',
        description: `Great \nprojects`,
      },
      {
        title: '50ᐩ',
        description: `Clebers \ncompleted`,
      },
    ],
    values: {
      work: [
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
      personal: [
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
    }
  },
];

export default globals;
