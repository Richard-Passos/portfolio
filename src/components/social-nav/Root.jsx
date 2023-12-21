import { Link2Icon } from '@radix-ui/react-icons';

import { cn } from '@/utils';

import { IconButton } from '../button';

const SocialNav = ({ className, children, ...props }) => {
  return (
    <section
      className={cn(
        'group flex flex-col items-end gap-2 pb-4 transition-transform duration-300 [--item-opacity:1] [--item-y:0%] focus-within:translate-y-0 focus-within:[--item-opacity:1] focus-within:[--item-y:0%] hover:translate-y-0 sm:translate-x-4 sm:translate-y-12 sm:px-4 sm:[--item-opacity:0] sm:[--item-y:100%]',
        className,
      )}
      {...props}
    >
      <IconButton
        className='pointer-events-none text-xs font-bold uppercase max-sm:hidden'
        tabIndex={-1}
        variants={{ color: 'inverted', style: 'transparent', size: 'sm' }}
      >
        Socials{' '}
        <IconButton.Icon>
          <Link2Icon />
        </IconButton.Icon>
      </IconButton>

      <nav className='flex gap-3 sm:mr-4'>{children}</nav>
    </section>
  );
};
export default SocialNav;
