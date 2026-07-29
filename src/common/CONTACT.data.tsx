import SOCIALSMeta from './CONTACT.meta';
import { Dictionary } from 'intlayer';

export default {
  key: 'contact',
  content: {
    email: 'richard.ac.passos12@gmail.com',
    creator: {
      name: 'Richard P.',
      url: 'https://github.com/Richard-Passos'
    },
    authors: [
      {
        name: 'Richard Passos',
        url: 'https://github.com/Richard-Passos'
      }
    ],
    socials: [
      {
        id: 'github',
        label: 'Github',
        url: 'https://github.com/Richard-Passos'
      },
      {
        id: 'instagram',
        label: 'Instagram',
        url: 'https://www.instagram.com/richardp.dev/'
      },
      {
        id: 'linkedin',
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/richardp-dev'
      }
    ] satisfies { id: keyof typeof SOCIALSMeta; label: string; url: string }[]
  }
} satisfies Dictionary;
