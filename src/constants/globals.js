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
        description: `Projects \n completed`,
      },
      {
        title: '1ᐩ',
        description: `Years of \n experience`,
      },
      {
        title: '100%',
        description: `Great \n projects`,
      },
      {
        title: '50ᐩ',
        description: `Clebers \n completed`,
      },
    ],
  },
];

export default globals;
