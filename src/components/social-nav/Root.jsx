'use client';

import { Link2Icon } from '@radix-ui/react-icons';

import { socialMedias } from '@/constants';
import { cn, transformTemplate } from '@/utils';

import { Animation } from '../animation';
import { Text } from '../ui/text';
import Item from './Item';

const SocialNav = ({ className, ...props }) => {
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
        <Text className='ml-auto flex items-center gap-6 text-xs font-bold uppercase'>
          <span className='transition-transform group-hover:translate-x-[2.375rem]'>
            Get in touch
          </span>{' '}
          <span className='origin-right rounded-full bg-content p-1.5 text-main transition-transform group-hover:scale-x-0'>
            <Link2Icon className='h-3.5 w-3.5' />
          </span>{' '}
        </Text>

        <nav className='flex gap-3'>
          {socialMedias.map((socialMedia) => (
            <Item
              key={socialMedia.href}
              {...socialMedia}
            />
          ))}
        </nav>
      </div>
    </Animation>
  );
};
export default SocialNav;
