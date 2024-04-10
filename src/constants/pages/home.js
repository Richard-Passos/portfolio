const homePage = {
  slug: 'home',
  sections: [
    {
      slug: 'hero',
      theme: 'light',
      data: {
        title: `Turning heads \n<bold>&</bold> conquering \nhearts`,
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