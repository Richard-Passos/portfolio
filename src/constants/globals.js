const globals = [
  {
    slug: 'header',
    data: {
      navItems: [
        {
          type: '',
          data: {
            href: '/',
            label: 'Home',
          },
        },
        {
          type: '',
          data: {
            href: '/work',
            label: 'Work',
          },
        },
        {
          type: '',
          data: {
            href: '/about',
            label: 'About',
          },
        },
        {
          type: '',
          data: {
            href: '/contact',
            label: 'Contact',
          },
        },
      ],
    },
  },
  {
    slug: 'footer',
    theme: 'light',
    data: {
      cta: {
        title: `Let's make \nthem fly`,
        subtitle: 'Is your great ideas ready?',
        action: {
          type: '',
          icon: {
            src: '/images/arrow-up-right.svg',
          },
          data: {
            href: '/contact',
            label: 'Go to contact page',
            variants: {
              size: 'lg',
            },
          },
        },
      },
      personal: {
        smalls: [
          {
            href: 'https://github.com/Richard-Passos',
            label: 'Made with ❤️ by <a>Richard</a>',
          },
          {
            href: 'https://www.linkedin.com/in/richardp-dev/',
            label: '© 2024 <a>Richard Passos</a>',
          },
        ],
        action: {
          type: '',
          icon: {
            src: '/images/arrow-up.svg',
          },
          animation: 'slideUp',
          data: {
            label: 'Back top',
            variants: {
              color: 'main',
              size: 'sm',
            },
          },
        },
        socialsTitle: 'Socials',
      },
    },
  },
  {
    slug: 'personal-info',
    data: {
      name: {
        first: 'Richard',
        last: 'Passos',
      },
      description: 'An great full stack developer to fit your needs.',
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
            'I craft captivating user interfaces with pixel-perfect precision, prioritizing seamless interactions and delightful micro animations to elevate user engagement.',
        },
        {
          title: 'Back end',
          description:
            'I engineer robust back-end systems that power your platform with efficiency and reliability, ensuring seamless data management and scalable functionality.',
        },
        {
          title: 'Full stack',
          description:
          'I integrate end-to-end solutions using cutting-edge front and back end technologies to deliver high-impact results that prioritize user experience, scalability, and performance, ensuring a seamless digital experience.',
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
          title: '100%',
          description: `On-time \ndeliveries`,
        },
      ],
      values: {
        work: [
          {
            icon: {
              src: '/images/graduation-cap.svg',
              alt: 'Learning-oriented icon',
              width: 24,
              height: 24,
            },
            title: 'Learning',
            description:
              'Embracing a mindset of lifelong learning to stay updated with the latest technologies, frameworks, and best practices.',
          },
          {
            icon: {
              src: '/images/trophy.svg',
              alt: 'Trophy icon',
              width: 24,
              height: 24,
            },
            title: 'Excellence',
            description:
              'Commitment to excellence drives the pursuit of mastery in all aspects of development, ensuring the delivery of top-tier solutions.',
          },
          {
            icon: {
              src: '/images/check-badge.svg',
              alt: 'Check badge icon',
              width: 24,
              height: 24,
            },
            title: 'Quality-oriented',
            description:
              'Dedicated to mastering all aspects of development, my commitment to excellence guarantees top-tier solutions.',
          },
          {
            icon: {
              src: '/images/smile.svg',
              alt: 'Smile icon',
              width: 24,
              height: 24,
            },
            title: 'Customer-oriented',
            description:
              'Keeping the end-user in mind when developing software, ensuring that their needs and expectations are met or exceeded.',
          },
      ],
        personal: [
          {
            icon: {
              src: '/images/shield.svg',
              alt: 'Integrity icon',
              width: 24,
              height: 24,
            },
            title: 'Integrity',
            description:
              'I remain true to my values, striving to act with honesty and transparency. This allows me to build solid and genuine relationships.',
          },
          {
            icon: {
              src: '/images/globe.svg',
              alt: 'Curiosity icon',
              width: 24,
              height: 24,
            },
            title: 'Curiosity',
            description:
              'My innate curiosity drives me to explore new ideas and discover new paths. Every challenge is an opportunity for learning and personal growth.',
          },
          {
            icon: {
              src: '/images/puzzle.svg',
              alt: 'Respect icon',
              width: 24,
              height: 24,
            },
            title: 'Respect',
            description:
              'I deeply value the people around me and their unique stories. I am always open to listening and learning from others, recognizing the importance of each voice and experience.',
          },
          {
            icon: {
              src: '/images/smile.svg',
              alt: 'Gratitude icon',
              width: 24,
              height: 24,
            },
            title: 'Gratitude',
            description:
              'I cultivate a mindset of gratitude, recognizing and appreciating the little things in life. Gratitude keeps me focused and inspires me to live with purpose and fulfillment.',
          },
        ],
      },
    },
  },
];

export default globals;
