import { CONTACT } from '@/common/CONTACT';
import { LOCATION } from '@/common/LOCATION';
import { Link } from '@/components/navigation/Link';
import { HeartIcon } from '@/components/system/Icon/Heart';
import { PaperPlaneIcon } from '@/components/system/Icon/PaperPlane';

export default {
  action: {
    url: `mailto:${CONTACT.email}`,
    label: (
      <>
        <PaperPlaneIcon /> Email
      </>
    )
  },
  description:
    'O dev — que se preocupa em construir produtos sólidos, escaláveis e com uma ótima experiência de usuário.',
  madeBy: (
    <>
      Feito com{' '}
      <HeartIcon
        aria-hidden={false}
        aria-label='amor'
        className='text-primary'
      />{' '}
      por <Link href={CONTACT.creator.url}>{CONTACT.creator.name}</Link>
    </>
  ),
  copyright: (
    <>
      © {new Date().getFullYear()} <Link href={CONTACT.creator.url}>{CONTACT.creator.name}</Link>
    </>
  ),
  location: LOCATION,
  socials: CONTACT.socials
};
