const contactPage = {
  slug: 'contact',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: `Drowning with \ngreat ideas?`,
        subtitle: "Let's make'em fly",
          block: {
            title: 'Hello · Olá · Ciao · Salut · 你好 · ',
            description: 'Ready for lift-off? Ping, tweet, message or poke — and we will get back as soon as possible.',
            image: {
              src: '/images/parallax-00.jpg',
              alt: '',
              width: 2491,
              height: 3737,
            },        
            icons: [
              { src: '/images/rocket.svg', title: 'Rocket' },
              { src: '/images/smile.svg', title: 'Smile' },
              { src: '/images/globe.svg', title: 'Globe' },
            ],  
          }
      },
    },
    {
      slug: 'contact',
      theme: 'light',
      data: {
        title: 'Contact',
        info: {
          icons: [
            { src: '/images/rocket.svg', title: 'Rocket' },
            { src: '/images/smile.svg', title: 'Smile' },
            { src: '/images/globe.svg', title: 'Globe' },
          ],  
          items: [
            {
              title: 'Availability',
              slug: 'availability'
            },
            {
              title: 'Local time',
              slug: 'local-time'
            },
            {
              title: 'Location',
              slug: 'location'
            },
            {
              title: 'Coffee',
              slug: 'buy-coffee'
            },
          ]
        },
        form: {
            title: 'To',
            subtitle: 'Or just email me at',
            subject: "👋 Hey Richard, I'd like to hire you!",
            fields: [
              {
                name: 'name',
                label: 'Name',
                optionalText: '',
                control: 'input',
                placeholder: 'Jhon',
                description: 'Your name.',
                defaultValue: '',
                config: [
                  {
                    name: 'string',
                    params: []
                  },
                  {
                    name: 'min',
                    params: [2, "Please, that can't be your name."]
                  }
                ]
              },
              {
                name: 'email',
                label: 'Email',
                optionalText: '',
                control: 'input',
                placeholder: 'john@doe.com',
                description: 'Your professional email.',
                defaultValue: '',
                config: [
                  {
                    name: 'string',
                    params: []
                  },
                  {
                    name: 'email',
                    params: ['Email adress looks a bit weird.']
                  }
                ]
              },
              {
                name: 'subject',
                label: 'Subject',
                optionalText: 'optional',
                control: 'input',
                placeholder: 'I wanna hire you!',
                description: 'Subject you wanna talk about.',
                defaultValue: '',
                config: [
                  {
                    name: 'string',
                    params: []
                  },
                  {
                    name: 'optional',
                    params: []
                  }
                ]
              },
              {
                name: 'service',
                label: 'Service',
                optionalText: 'optional',
                control: 'select',
                placeholder: 'Select a service...',
                description: 'Select the service you want.',
                defaultValue: '',
                config: [
                  {
                    name: 'string',
                    params: []
                  },
                  {
                    name: 'optional',
                    params: []
                  }
                ]
              },
              {
                name: 'message',
                label: 'Message',
                optionalText: '',
                control: 'textarea',
                placeholder: '👋 Hey Richard! I would love if you could help me with...',
                description: 'Your message.',
                defaultValue: '',
                config: [
                  {
                    name: 'string',
                    params: []
                  },
                  {
                    name: 'min',
                    params: [3, 'Come on... you can do better than that.']
                  },
                  {
                    name: 'max',
                    params: [300, 'Come on... take it easy.']
                  }
                ]
              },
            ],
            submit: 'Submit'
        }
      }
    },
    {
      slug: 'services',
      theme: 'dark',
      data: {
        title: ['Services'],
        image: {
          src: '/images/parallax-00.jpg',
          alt: '',
          width: 2491,
          height: 3737,
        },      }
    }
  ],
  metadata: {
    title: 'Contact',
    description: 'Richard passos contact details and contact form.'
  }
}

export default contactPage