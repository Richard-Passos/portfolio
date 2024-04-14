import globals from '../globals';

const contactPage = {
  slug: 'contact',
  sections: [
    {
      slug: 'hero',
      theme: 'dark',
      data: {
        title: 'Drowning with \ngreat ideas?',
        subtitle: "Let's make'em fly",
        description:
          'Ready for lift-off? Ping, tweet, message or poke — and we will get back as soon as possible.',
        grid: {
          templates: {
            default:
              '"item-0 .""item-1 item-1""item-2 item-2""item-3 item-3""item-4 item-4"',
            sm: '"item-0 item-1 item-1 item-1""item-0 item-1 item-1 item-1""item-2 item-2 item-3 item-3""item-4 item-4 item-4 item-4"',
            lg: '"item-0 item-1 item-1 item-1 item-2 item-2""item-0 item-1 item-1 item-1 item-3 item-3""item-4 item-4 item-4 item-4 item-4 item-4"',
          },
          items: [
            {
              type: 'icons',
              data: [
                { src: '/images/rocket.svg', title: 'Rocket' },
                { src: '/images/smile.svg', title: 'Smile' },
                { src: '/images/globe.svg', title: 'Globe' },
              ],
            },
            {
              type: 'indicator',
              data: {
                description:
                  'Ready for lift-off? Ping, tweet, message or poke — and we will get back as soon as possible.',
              },
            },
            {
              type: 'data-changer',
              data: {
                action: {
                  type: '',
                  icon: { src: '/images/rotate.svg' },
                  data: {
                    label: 'Change statistic',
                  },
                },
                items: globals.find((data) => data.slug === 'personal-info')?.data.stats,
              },
            },
            {
              type: 'data-changer',
              data: {
                action: {
                  type: '',
                  icon: { src: '/images/rotate.svg' },
                  data: {
                    label: 'Change value',
                  },
                },
                items: [],
              },
            },
            {
              type: 'horizontal-scroll',
              data: {
                icons: [
                  { src: '/images/smile.svg', title: 'Smile' },
                  { src: '/images/globe.svg', title: 'Globe' },
                ],
                description: 'Improve · Inspire · Repeat ·',
              },
            },
          ],
        },
        infinityText: 'Improve · Inspire · Repeat ·',
        icons: [
          { src: '/images/rocket.svg', title: 'Rocket' },
          { src: '/images/smile.svg', title: 'Smile' },
          { src: '/images/globe.svg', title: 'Globe' },
        ],
        dataChanger: [
          [
            {
              title: '10ᐩ',
              description: 'Projects completed',
            },
            {
              title: '1ᐩ',
              description: 'Years of experience',
            },
            {
              title: '100%',
              description: 'Great projects',
            },
            {
              title: '50ᐩ',
              description: 'Clebers completed',
            },
          ],
          [
            {
              title: '1',
              description: 'Integrity · Curiosity',
            },
            {
              title: '2',
              description: 'Integrity · Curiosity',
            },
            {
              title: '3',
              description: 'Respect · Gratitude',
            },
            {
              title: '4',
              description: 'Respect · Gratitude',
            },
          ],
        ],
      },
    },
    {
      slug: 'contact',
      theme: 'light',
      id: 'scrollTo',
      data: {
        title: 'Hello · Olá · Ciao · Salut · 你好 ·',
        info: {
          icons: [
            { src: '/images/rocket.svg', title: 'Rocket' },
            { src: '/images/smile.svg', title: 'Smile' },
            { src: '/images/globe.svg', title: 'Globe' },
          ],
          items: [
            {
              title: 'Availability',
              slug: 'availability',
            },
            {
              title: 'Local time',
              slug: 'local-time',
            },
            {
              title: 'Location',
              slug: 'location',
            },
            {
              title: 'Coffee',
              slug: 'buy-coffee',
            },
          ],
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
              placeholder: 'John Doe',
              description: 'Your name.',
              defaultValue: '',
              config: [
                {
                  name: 'string',
                  params: [],
                },
                {
                  name: 'min',
                  params: [2, "Please, that can't be your name."],
                },
              ],
            },
            {
              name: 'email',
              tye: 'email',
              label: 'Email',
              optionalText: '',
              control: 'input',
              placeholder: 'john@doe.com',
              description: 'Your professional email.',
              defaultValue: '',
              config: [
                {
                  name: 'string',
                  params: [],
                },
                {
                  name: 'email',
                  params: ['Email adress looks a bit weird.'],
                },
              ],
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
                  params: [],
                },
                {
                  name: 'optional',
                  params: [],
                },
              ],
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
                  params: [],
                },
                {
                  name: 'optional',
                  params: [],
                },
              ],
              items: globals
                .find((data) => data.slug === 'personal-info')?.data.services?.map((data) => data.title),
            },
            {
              name: 'message',
              label: 'Message',
              optionalText: '',
              control: 'textarea',
              placeholder:
                '👋 Hey Richard! I would love if you could help me with...',
              description: 'Your message.',
              defaultValue: '',
              config: [
                {
                  name: 'string',
                  params: [],
                },
                {
                  name: 'min',
                  params: [3, 'Come on... you can do better than that.'],
                },
                {
                  name: 'max',
                  params: [300, 'Come on... take it easy.'],
                },
              ],
            },
          ],
          action: {
            type: '',
            icon: { src: '/images/paperplane.svg' },
            data: {
              label: 'Submit',
            },
          },
        },
      },
    },
    {
      slug: 'services',
      theme: 'dark',
      data: {
        title: ['Services'],
        block: {
          image: {
            src: '/images/parallax-00.jpg',
            alt: '',
            width: 2491,
            height: 3737,
          },
          items: globals.find((data) => data.slug === 'personal-info')?.data.services,
          icons: [
            { src: '/images/globe.svg', title: 'Globe' },
            { src: '/images/smile.svg', title: 'Smile' },
          ],
        },
      },
    },
  ],
  metadata: {
    title: 'Contact',
    description: 'Richard Passos contact details and contact form.',
  },
};

export default contactPage;
