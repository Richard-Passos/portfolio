const homePage = {
  slug: 'home',
  sections: [
    {
      slug: 'hero',
      theme: 'light',
      data: {
        title: `Turning heads \n<b>&</b> conquering \nhearts`,
        description: "Hey there! I'm Richard an awesome full stack developer — who cares building solid and scalable products with a great user experience.",
        year: 2024
      }
    },
    {
      slug: 'work',
      theme: 'dark',
      id: 'scrollTo',
      data: {
        title: [
          'About',
          'work'
        ],
        subtitle: 'Just someone who wanna conquer minds and hearts.',
        description:
          "I'm Richard an awesome full stack developer based in Brazil. When I'm not coding, you can catch me in the gaming world — I'm a huge fan, especially when it comes to rogue-like games.",
          block: {
            title: 'Selected works',
            action: { 
              label:'More works',
              href: '/projects',
              variants: { 
                color: 'main' 
              }, 
              icon: {
                src: '/images/plus.svg',
              }
            }
          },
          list: {
            items: ['Mission', 'Soft & hard skills', 'Services'],
            action: {
              href: '/work',
              label: 'Explore'
            }
          }
      }
    },
    {
      slug: 'but',
      theme: 'light',
      data: {
        title: 'But',
        description: "it's not just about the tech."
      }
    },
    {
      slug: 'about',
      theme: 'dark',
      data: {
        title: [
          'About',
          'me'
        ],
        grid: {
          templates: {
            default: '"item-0""item-1""item-2""item-3""item-4""item-5""item-6"',
            sm: '"item-0 item-0""item-1 item-2""item-3 item-4""item-5 item-6"',
            lg: '". item-0 item-0"". item-0 item-0""item-1 item-2 item-3""item-1 item-2 item-4""item-5 item-5 item-6""item-5 item-5 item-6"'
          },
          items: [
            {
              type: 'description',
              data: {
                title: 'About',
                description: "🤟 <b>Hey —</b> I'm Richard an awesome full stack developer based in Brazil. When I'm not coding, you can catch me in the gaming world — I'm a huge fan, especially when it comes to rogue-like games."
              }
            },
            {
              type: 'bold',
              data: {
                icon: {src: '/images/globe.svg', title: 'Globe'},
                description: "Based in Brazil, GMT-3"
              }
            },
            {
              type: 'infinity-scroll',
              data: {
                icon: {src: '/images/fingerprint.svg', title: 'Fingerprint'},
                title: 'My values',
                items: ['Integrity', 'Curiosity', 'Respect', 'Gratitude']
              }
            },
            {
              type: 'simple',
              data: {
                icon: {src: '/images/rocket.svg', title: 'Rocket'},
                description: 'Improving a little bit every day.',
              }
            },
            {
              type: 'simple',
              data: {
                icon: {src: '/images/game-controller.svg', title: 'Game controller'},
                description: 'I love to play games.',
              }
            },
            {
              type: 'local-time',
              data: {
                title: 'My local time'
              }
            },
            {
              type: 'link',
              data: {
                href: 'https://www.buymeacoffee.com/richardp.dev',
                icon: {src: '/images/mug.svg', title: 'Mug'},
                title: 'Buy me a coffee'
              }
            }
          ]
        },
        list: {
          items: ['Background', 'Hobbys', 'Personality'],
          action: {
            href: '/about',
            label: 'Explore'
          }
        }
      }
    },
    {
      slug: 'cta',
      theme: 'dark',
      data: {
        description: "If you're looking for a developer who's got the skills, passion and a problem solving mindset to make your ideas come true. Then..."
      }
    },
  ],
}

export default homePage