import { GithubIcon } from '@/components/system/Icons/Github';
import { InstagramIcon } from '@/components/system/Icons/Instagram';
import { LinkedinIcon } from '@/components/system/Icons/Linkedin';
import { MugIcon } from '@/components/system/Icons/Mug';

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
