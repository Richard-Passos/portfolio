import { cn } from '@/utils';

import Lines from '../lines';
import { ScrollAnimation } from '../scroll-animation';
import { scrollSmoothConfig } from '../smooth-scroll';

const FooterOverlay = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '1 .05'],
    },
    useScrollRes: 'scrollYProgress',
    prop: 'height',
    scrollPoints: [0, 1],
    propPoints: ['79px', '0px'],
  };

  return (
    <ScrollAnimation
      className={cn('absolute top-0 z-10 w-full -translate-y-px', className)}
      config={animationConfig}
      layout
      smoothConfig={{ scroll: scrollSmoothConfig }}
      {...props}
    >
      <div>
        <div className='absolute left-1/2 h-[750%] w-[150%] -translate-x-1/2 -translate-y-[86.666%] overflow-hidden rounded-[50%] bg-main shadow-[0_50px_75px_-15px_var(--tw-shadow-color)] shadow-[hsl(0_0%_80%/.15)] transition-[background-color,box-shadow] dark:shadow-[hsl(0_0%_5%/.15)]'>
          <Lines className='absolute' />
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default FooterOverlay;
