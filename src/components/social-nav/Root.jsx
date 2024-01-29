import { cn } from '@/utils';

import { TextTitle } from '../ui/text';

const SocialNav = ({ className, children, ...props }) => {
  return (
    <section
      className={cn('relative flex flex-col gap-sm', className)}
      {...props}
    >
      <TextTitle className='text-xs uppercase text-muted-content sm:absolute sm:left-4 sm:top-4'>
        Socials
      </TextTitle>

      <nav className='grid gap-sm sm:grid-cols-2'>
        <span
          aria-hidden
          className='max-sm:hidden'
        />

        {children}
      </nav>
    </section>
  );
};
export default SocialNav;
