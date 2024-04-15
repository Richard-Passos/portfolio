import { cn } from '@/utils';

import Lines from '../lines';
import { ScrollAnimate } from '../scroll-animate';

const ANIMATION_CONFIG = {
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

const FooterOverlay = ({ className, ...props }) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.h}>
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
        <ScrollAnimate config={ANIMATION_CONFIG.opacity}>
          <span className='absolute inset-0 -translate-y-[17.5%] bg-gradient-to-b from-main via-transparent to-transparent' />
        </ScrollAnimate>{' '}
      </div>
    </ScrollAnimate>
  );
};

export default FooterOverlay;
