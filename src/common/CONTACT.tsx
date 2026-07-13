import { GithubIcon } from '@/components/system/Icon/Github';
import { InstagramIcon } from '@/components/system/Icon/Instagram';
import { LinkedinIcon } from '@/components/system/Icon/Linkedin';
import { MugIcon } from '@/components/system/Icon/Mug';

export const CONTACT = {
  email: 'richard.ac.passos12@gmail.com',
  creator: {
    url: 'https://github.com/Richard-Passos',
    name: 'Richard P.'
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
      icon: <GithubIcon />
    },
    {
      url: 'https://www.instagram.com/richardp.dev/',
      label: 'Instagram',
      icon: <InstagramIcon />
    },
    {
      url: 'https://www.linkedin.com/in/richardp-dev',
      label: 'Linkedin',
      icon: <LinkedinIcon />
    }
  ],
  buyCoffee: {
    url: 'https://www.buymeacoffee.com/richardp.dev',
    icon: <MugIcon />
  }
} as const;
