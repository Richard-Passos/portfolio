'use client';

import { Share1Icon } from '@radix-ui/react-icons';

import { cn, transformTemplate } from '@/utils';

import { Animation } from '../animation';
import { Text } from '../ui/text';

const SocialNav = ({ className, children, ...props }) => {
  const variants = [
    { y: '4.5rem' },
    { y: '1rem', transition: { staggerChildren: 0.1 } },
  ];

  return (
    <Animation
      className={cn(
        'group translate-x-4 space-y-4 p-4 focus-within:!translate-y-4',
        className,
      )}
      {...props}
      transformTemplate={transformTemplate}
      type='whileHover'
      variants={variants}
    >
      <div>
        <Text className='ml-auto flex items-center gap-4 text-xs font-bold uppercase text-content transition-transform group-hover:translate-x-[1.875rem]'>
          Follow me{' '}
          <Share1Icon className='h-3.5 w-3.5 transition-opacity group-hover:opacity-0' />
        </Text>

        <nav className='flex w-max gap-3'>{children}</nav>
      </div>
    </Animation>
  );
};
export default SocialNav;
