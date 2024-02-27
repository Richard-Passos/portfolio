import { cn } from '@/utils';

import Button from '../button';
import { Icon } from '../ui';
import { ArrowUpIcon } from '../ui/icon/icons';
import { Text } from '../ui/text';

const SocialNavItem = ({ className, variants, icon, name, ...props }) => {
  return (
    <Button.Magnetic
      asLink
      className={cn(
        'aspect-auto h-12 rounded-sm bg-main [--variant-a:--primary] hover:z-10 hover:text-primary-content [&>span>span]:px-4 [&_svg]:size-1/2',
        className,
      )}
      limit={0.2}
      variants={{ color: 'main', ...variants }}
      {...props}
    >
      <Icon
        aria-hidden
        className='mr-2 !size-6'
        name={icon}
      />

      <Text className='mr-4 text-xs lowercase first-letter:uppercase'>
        {name}
      </Text>

      <Button.Icon
        animation='slideUpRight'
        className='ml-auto h-6 group-hover:[&>span]:bg-primary-content'
      >
        <ArrowUpIcon className='rotate-45 fill-primary' />
      </Button.Icon>
    </Button.Magnetic>
  );
};

export default SocialNavItem;
