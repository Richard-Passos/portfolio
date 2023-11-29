import { Link2Icon } from '@radix-ui/react-icons';

import { socialMedias } from '@/constants';
import { cn } from '@/utils';

import { IconButton } from '../button';
import Item from './Item';

const SocialNav = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'group translate-x-4 translate-y-[4.5rem] space-y-4 p-4 transition-transform duration-300 [--item-opacity:0] [--item-y:100%] focus-within:translate-y-4 focus-within:[--item-opacity:1] focus-within:[--item-y:0%] hover:translate-y-4',
        className,
      )}
      {...props}
    >
      <IconButton
        className='pointer-events-none h-fit text-xs font-bold uppercase'
        tabIndex={-1}
        variants={{ color: 'inverted', style: 'transparent', size: 'sm' }}
      >
        Get in touch{' '}
        <IconButton.Icon>
          <Link2Icon />
        </IconButton.Icon>
      </IconButton>

      <nav className='flex gap-3'>
        {socialMedias.map((socialMedia, i) => (
          <Item
            index={i}
            key={socialMedia.href}
            {...socialMedia}
          />
        ))}
      </nav>
    </section>
  );
};
export default SocialNav;
