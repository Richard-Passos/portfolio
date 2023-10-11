import { cn } from '@/utils';

import ScrollAnimation from '../scroll-animation';

const ListItem = ({ className, reverse, children, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '0 .75'],
    },
    prop: '--tw-translate-x',
    propPoints: reverse ? ['-100%', '0%'] : ['100%', '0%'],
  };

  return (
    <li
      className={cn(
        'group border-t border-content px-24 py-12 [mask-image:linear-gradient(to_right,_transparent_0%,_#000_10%,_#000_90%,_transparent_100%)] last:border-b',
        className,
      )}
      {...props}
    >
      <ScrollAnimation.Translate
        className='relative flex w-full items-center justify-between gap-6'
        config={animationConfig}
      >
        <div>{children}</div>
      </ScrollAnimation.Translate>
    </li>
  );
};

export default ListItem;
