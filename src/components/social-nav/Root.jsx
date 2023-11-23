import { Link2Icon } from '@radix-ui/react-icons';

import { socialMedias } from '@/constants';
import { cn } from '@/utils';

import { Text } from '../ui/text';
import Item from './Item';

const SocialNav = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'group translate-x-4 translate-y-[4.5rem] space-y-4 p-4 transition-transform duration-300 [--icon-scale:1] [--item-opacity:0] [--item-y:100%] [--title-x:0%] focus-within:translate-y-4 focus-within:[--icon-scale:0] focus-within:[--item-opacity:1] focus-within:[--item-y:0%] focus-within:[--title-x:2.375rem] hover:translate-y-4',
        className,
      )}
      {...props}
    >
      <Text className='ml-auto flex items-center gap-6 text-xs font-bold uppercase'>
        <span className='translate-x-[--title-x] transition-transform duration-300 group-hover:translate-x-[2.375rem]'>
          Get in touch
        </span>{' '}
        <span className='scale-[--icon-scale] rounded-full bg-content p-1.5 text-main transition-transform duration-300 group-hover:scale-0'>
          <Link2Icon className='h-3.5 w-3.5' />
        </span>{' '}
      </Text>

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
