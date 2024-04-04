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
        icon: {src: '/images/github.svg'},
        label: 'Github',
        href: 'https://github.com/Richard-Passos',
      },
      {
        icon: {src: '/images/instagram.svg'},
        label: 'Instagram',
        href: 'https://www.instagram.com/richardp.dev',
      },
      {
        icon: {src: '/images/linkedin.svg'},
        label: 'Linkedin',
        href: 'https://www.linkedin.com/in/richardp-dev',
      },
    ],
    buyMeACoffeHref: 'https://www.buymeacoffee.com/richardp.dev',
    availability: 'Available to work',
  },
];

export default globals;
