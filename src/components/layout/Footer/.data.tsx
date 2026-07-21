import { CONTACT } from '@/common/CONTACT';
import { LOCATION } from '@/common/LOCATION';
import { PaperPlaneIcon } from '@/components/system/Icon/PaperPlane';

export default {
  action: {
    label: (
      <>
        <PaperPlaneIcon /> Contato
      </>
    )
  },
  description:
    'O dev — que se preocupa em construir produtos sólidos e escaláveis com uma ótima experiência de usuário.',
  madeBy: (
    <>
      Feito com ❤️ por <a href={CONTACT.creator.url}>{CONTACT.creator.name}</a>
    </>
  ),
  copyright: (
    <>
      © {new Date().getFullYear()} <a href={CONTACT.creator.url}>{CONTACT.creator.name}</a>
    </>
  ),
  location: LOCATION,
  socials: CONTACT.socials
};
