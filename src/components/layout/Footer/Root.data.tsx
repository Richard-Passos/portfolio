import { CONTACT } from '@/common/CONTACT';
import { LOCATION } from '@/common/LOCATION';
import { PAGES } from '@/common/PAGES';

export default {
    action: {
      label: 'Entre em contato'
    },
    description: 'O dev — que se preocupa em construir produtos sólidos e escaláveis com uma ótima experiência de usuário.',
    madeBy: <>Feito com ❤️ por <a href={CONTACT.creator.url}>{CONTACT.creator.name}</a>.</>,
    copyright: <>© 2026 <a href={CONTACT.creator.url}>{CONTACT.creator.name}</a>.</>,
    location: LOCATION,
    socials: CONTACT.socials,
    legalPages: PAGES.legal
  }