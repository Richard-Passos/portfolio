import { cn } from '@/utils';

import Lines from '../lines';
import { ScrollAnimate } from '../scroll-animate';

const FooterOverlay = ({ className, ...props }) => {
  const animationConfig = {
    h: {
      scrollConfig: {
        offset: ['0 1', '.95 1'],
      },
      prop: '--h',
      propPoints: ['79px', '0px'],
    },
    opacity: {
      scrollConfig: {
        offset: ['0 1', '.95 1'],
      },
      prop: 'opacity',
      propPoints: [0.8, 0],
    },
  };

  return (
    <ScrollAnimate config={animationConfig.h}>
      <div
        className={cn(
          'pointer-events-none absolute inset-y-0 z-20 max-h-screen w-screen overflow-hidden',
          className,
        )}
        {...props}
      >
        <div className='relative z-10 h-[--h] w-full -translate-y-px'>
          <div className='pointer-events-auto absolute left-1/2 h-[750%] w-[150%] -translate-x-1/2 -translate-y-[86.666%] overflow-hidden rounded-[50%] bg-main'>
            <Lines className='absolute' />
          </div>
        </div>
        <ScrollAnimate config={animationConfig.opacity}>
          <span className='absolute inset-0 -translate-y-1/4 bg-gradient-to-b from-main to-transparent' />
        </ScrollAnimate>{' '}
      </div>
    </ScrollAnimate>
  );
};

export default FooterOverlay;
