import { cn } from '@/utils';

import Bg from '../bg';
import Lines from '../lines';
import { ScrollAnimate } from '../scroll-animate';

const ChangeTheme = ({ className, ...props }) => {
  const animationConfig = {
    scrollConfig: {
      offset: ['0 1', '0 0'],
    },
    scroll: 'scrollYProgress',
    scrollPoints: [0, 1],
    prop: '--h',
    propPoints: ['0%', '100%'],
  };

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 flex items-center justify-center',
        className,
      )}
      {...props}
    >
      <ScrollAnimate config={animationConfig}>
        <div className='absolute top-px h-20 w-screen'>
          <div className='relative h-[--h] w-full -translate-y-full rotate-180 overflow-hidden'>
            <div className='pointer-events-auto absolute left-1/2 h-[750%] w-[150%] -translate-x-1/2 -translate-y-[86.666%] overflow-hidden rounded-[50%] bg-main transition-bg'>
              <Lines className='z-0' />
            </div>
          </div>
        </div>
      </ScrollAnimate>

      <Bg asChild>
        <div>
          <Lines className='z-0' />
        </div>
      </Bg>
    </div>
  );
};

export default ChangeTheme;
