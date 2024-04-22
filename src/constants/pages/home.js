import globals from '../globals';
import projects from '../projects';

const homePage = {
  slug: 'home',
  sections: [
    {
      slug: 'hero',
      theme: 'light',
      data: {
        title: `Turning heads \n<b>&</b> conquering \nhearts`,
        description:
          "Hey there! I'm Richard an awesome full stack developer — who cares building solid and scalable products with a great user experience.",
        text: '(2024)',
        icon: { src: '/images/smile.svg', title: 'Smile' },
      },
    },
    {
      slug: 'work',
      theme: 'dark',
      id: 'scrollTo',
      data: {
        title: ['About', 'work'],
        subtitle: 'Enter a universe where excellence is the norm',
         description:
          "Every detail is an opportunity. Every line of code I write goes beyond mere functionality — they shape digital experiences that captivate. Discover the impact of a partnership that propels you to digital prominence.",
        block: {
          title: 'Selected works',
          items: projects.filter((data) => data.isSelected),
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
        },
        list: {
          items: ['Mission', 'Soft & hard skills', 'Services'],
          action: {
            type: '',
            icon: { src: '/images/arrow-up-right.svg' },
            animation: 'slideUpRight',
            data: {
              label: 'Explore',
              href: '/work',
              variants: {
                color: 'main',
              },
            },
          },
        },
      },
    },
    {
      slug: 'but',
      theme: 'light',
      data: {
        title: 'But',
        description: "it's not just about the tech.",
      },
    },
    {
      slug: 'about',
      theme: 'dark',
      data: {
        title: ['About', 'me'],
        grid: {
          templates: {
            default: '"item-0""item-1""item-2""item-3""item-4""item-5""item-6"',
            sm: '"item-0 item-0""item-1 item-2""item-3 item-4""item-5 item-6"',
            lg: '". item-0 item-0"". item-0 item-0""item-1 item-2 item-3""item-1 item-2 item-4""item-5 item-5 item-6""item-5 item-5 item-6"',
          },
          items: [
            {
              type: 'description',
              data: {
                title: 'About',
                description:
                  "🤟 <b>Hey —</b> I'm Richard an awesome full stack developer based in Brazil. When I'm not coding, you can catch me in the gaming world — I'm a huge fan, especially when it comes to rogue-like games.",
              },
            },
            {
              type: 'bold',
              data: {
                icon: { src: '/images/globe.svg', title: 'Globe' },
                description: 'Based in Brazil, GMT-3',
              },
            },
            {
              type: 'infinity-scroll',
              data: {
                icon: { src: '/images/fingerprint.svg', title: 'Fingerprint' },
                title: 'My values',
                items: globals.find((data) => data.slug === 'personal-info')?.data
                .values.personal.map((data) => data.title),
              },
            },
            {
              type: 'simple',
              data: {
                icon: { src: '/images/rocket.svg', title: 'Rocket' },
                description: 'Improving a little bit every day.',
              },
            },
            {
              type: 'simple',
              data: {
                icon: {
                  src: '/images/game-controller.svg',
                  title: 'Game controller',
                },
                description: 'I love to play games.',
              },
            },
            {
              type: 'local-time',
              data: {
                title: 'My local time',
              },
            },
            {
              type: 'link',
              data: {
                href: 'https://www.buymeacoffee.com/richardp.dev',
                icon: { src: '/images/mug.svg', title: 'Mug' },
                title: 'Buy me a coffee',
              },
            },
          ],
        },
        list: {
          items: ['Background', 'Hobbys', 'Personality'],
          action: {
            type: '',
            icon: { src: '/images/arrow-up-right.svg' },
            animation: 'slideUpRight',
            data: {
              label: 'Explore',
              href: '/about',
              variants: {
                color: 'main',
              },
            },
          },
        },
      },
    },
    {
      slug: 'cta',
      theme: 'dark',
      data: {
        description:
          "Ready to fly your great ideas to digital prominance with a developer who brings both skill and passion to the table? Let's team up and...",
        icons: [
          { src: '/images/smile.svg', title: 'Smile' },
          { src: '/images/globe.svg', title: 'Globe' },
        ],
      },
    },
  ],
};

export default homePage;
