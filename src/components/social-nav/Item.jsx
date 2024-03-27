import { capitalize, cn } from '@/utils';

import Button from '../button';
import { Icon } from '../ui';
import { Text } from '../ui/text';

const SocialNavItem = ({ className, variants, label, ...props }) => {
  return (
    <Button.Magnetic
      asLink
       className={cn(
        'aspect-auto rounded-sm hover:z-10 h-12 [--variant-a:--primary] hover:[--variant-c:--primary-c] [&>span>span]:px-6 [&_svg]:size-[none]',
        className,
      )}
      limit={0.2}
      variants={{ color: 'main', ...variants }}
      {...props}
    >
      <Icon
        aria-hidden
        className='size-6'
        name={capitalize(label)}
      />

      <Text className='mr-auto text-xs lowercase first-letter:uppercase'>
        {label}
      </Text>
    </Button.Magnetic>
  );
};

export default SocialNavItem;
