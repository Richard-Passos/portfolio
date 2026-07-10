import { GithubIcon } from '@/components/system/icons/Github';
import { InstagramIcon } from '@/components/system/icons/Instagram';
import { LinkedinIcon } from '@/components/system/icons/Linkedin';
import { MugIcon } from '@/components/system/icons/Mug';

export const CONTACT = {
  email: 'richard.ac.passos12@gmail.com',
  creator: {
    url: 'https://github.com/Richard-Passos',
    name: 'Richard P'
  },
  authors: [
    {
      name: 'Richard Passos',
      url: 'https://github.com/Richard-Passos'
    }
  ],
  socials: [
    {
      url: 'https://github.com/Richard-Passos',
      label: 'Github',
      Icon: GithubIcon
    },
    {
      url: 'https://www.instagram.com/richardp.dev/',
      label: 'Instagram',
      Icon: InstagramIcon
    },
    {
      url: 'https://www.linkedin.com/in/richardp-dev',
      label: 'Linkedin',
      Icon: LinkedinIcon
    }
  ],
  buyCoffee: {
    url: 'https://www.buymeacoffee.com/richardp.dev',
    Icon: MugIcon
  }
} as const;
