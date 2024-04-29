import { cn } from '@/utils';

import { MagneticButton } from '../button';
import { Icon } from '../ui';
import { Text } from '../ui/text';

const SocialNavItem = ({ className, variants, data = {}, ...props }) => {
  return (
    <MagneticButton
      className={cn(
        'aspect-auto h-12 rounded-sm *:*:justify-start hover:z-10 [&_svg]:size-full',
        className,
      )}
      limit={0.2}
      variants={{ color: 'main', style: 'alternate', ...variants }}
      href={data.href}
      isExternal={data.isExternal}
      {...props}
    >
      <div className='ml-6 size-6 shrink-0'>
        <Icon {...data.icon} />
      </div>

      <Text className='mr-6 overflow-hidden text-ellipsis whitespace-nowrap text-xs lowercase first-letter:uppercase'>
        {data.label}
      </Text>
    </MagneticButton>
  );
};

export default SocialNavItem;
