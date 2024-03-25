import { cn } from '@/utils';

import Lines from '../lines';
import { ScrollAnimate } from '../scroll-animate';

const FooterOverlay = ({ className, ...props }) => {
  const animationConfig = {
    scrollConfig: {
      offset: ['0 1', '.95 1'],
    },
    scroll: 'scrollYProgress',
    scrollPoints: [0, 1],
    prop: '--h',
    propPoints: ['79px', '0px'],
  };

  return (
    <ScrollAnimate
      className={cn(
        'pointer-events-none absolute inset-y-0 z-10 max-h-screen w-screen overflow-hidden',
        className,
      )}
      config={animationConfig}
      {...props}
    >
      <div>
        <div className='relative h-[--h] w-full -translate-y-px'>
          <div className='pointer-events-auto absolute left-1/2 h-[750%] w-[150%] -translate-x-1/2 -translate-y-[86.666%] overflow-hidden rounded-[50%] bg-main shadow-[0_50px_75px_-15px] shadow-[hsl(0_0%_90%/.2)] transition-[background-color,box-shadow] dark:shadow-[hsl(0_0%_10%/.2)]'>
            <Lines className='absolute' />
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default FooterOverlay;
