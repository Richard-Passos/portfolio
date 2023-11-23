import { cn } from '@/utils';

import { ScrollAnimationTransform } from '../scroll-animation';
import { scrollSmoothConfig } from '../smooth-scroll';
import { TextTitle } from '../ui/text';

const ScrollTitle = ({ className, title, ...props }) => {
  const animationConfig = {
    prop: 'x',
    propPoints: ['-25%', '25%'],
  };

  return (
    <TextTitle
      className={cn(
        'w-full max-w-bounds overflow-hidden text-9xl uppercase',
        className,
      )}
      {...props}
    >
      <ScrollAnimationTransform
        config={animationConfig}
        smoothConfig={{ scroll: scrollSmoothConfig }}
      >
        <span className='flex w-full justify-center gap-font-blank-space whitespace-nowrap'>
          <SecondaryTitle>
            {title} {title} {title}
          </SecondaryTitle>

          <span>{title}</span>

          <SecondaryTitle>
            {title} {title} {title}
          </SecondaryTitle>
        </span>
      </ScrollAnimationTransform>
    </TextTitle>
  );
};

const SecondaryTitle = ({ className, ...props }) => {
  return (
    <span
      className={cn('outline-text flex opacity-50 dark:opacity-25', className)}
      {...props}
    />
  );
};

export default ScrollTitle;
