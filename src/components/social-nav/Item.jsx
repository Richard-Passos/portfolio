import { cn } from '@/utils';

import { MagneticButton } from '../button';
import { Icon } from '../ui';
import { Text } from '../ui/text';

const SocialNavItem = ({ className, variants, data = {}, ...props }) => {
  return (
    <MagneticButton
      className={cn(
        'aspect-auto h-12 rounded-sm [--variant-a:--primary] hover:z-10 hover:[--variant-c:--primary-c] [&>span>span]:px-6 [&_svg]:size-full',
        className,
      )}
      limit={0.2}
      variants={{ color: 'main', ...variants }}
      href={data.href}
      {...props}
    >
      <div className='size-6 shrink-0'>
      <Icon
        {...data.icon}
      />
      </div>

      <Text className='mr-auto overflow-hidden text-ellipsis whitespace-nowrap text-xs lowercase first-letter:uppercase'>
        {data.label}
      </Text>
    </MagneticButton>
  );
};

export default SocialNavItem;
