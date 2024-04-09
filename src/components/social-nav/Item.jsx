import { cn } from '@/utils';

import Button from '../button';
import { Icon } from '../ui';
import { Text } from '../ui/text';

const SocialNavItem = ({ className, variants, data = {}, ...props }) => {
  return (
    <Button.Magnetic
      asLink
      className={cn(
        'aspect-auto h-12 rounded-sm [--variant-a:--primary] hover:z-10 hover:[--variant-c:--primary-c] [&>span>span]:px-6 [&_svg]:size-[none]',
        className,
      )}
      limit={0.2}
      variants={{ color: 'main', ...variants }}
      href={data.href}
      {...props}
    >
      <Icon
        aria-hidden
        className='size-6 shrink-0'
        {...data.icon}
      />

       <Text className='mr-auto text-xs lowercase overflow-hidden text-ellipsis whitespace-nowrap first-letter:uppercase'>
        {data.label}
      </Text>
    </Button.Magnetic>
  );
};

export default SocialNavItem;
