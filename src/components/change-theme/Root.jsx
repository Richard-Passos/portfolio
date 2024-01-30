import { cn } from '@/utils';

import Bg from '../bg';
import Lines from '../lines';
import { ScrollAnimation } from '../scroll-animation';

const ChangeTheme = ({ theme = 'light', className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '0 0'],
    },
    useScrollRes: 'scrollYProgress',
    prop: '--h',
    scrollPoints: [0, 1],
    propPoints: ['0%', '100%'],
  };

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 flex items-center justify-center',
        theme,
        className,
      )}
      {...props}
    >
      <ScrollAnimation config={animationConfig}>
        <div className='absolute inset-y-0 h-20 w-screen'>
          <div className='relative h-[--h] w-full -translate-y-full rotate-180 overflow-hidden'>
            <div className='pointer-events-auto absolute left-1/2 h-[750%] w-[150%] -translate-x-1/2 -translate-y-[86.666%] overflow-hidden rounded-[50%] bg-main transition-bg'>
              <Lines />
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <Bg />
    </div>
  );
};

export default ChangeTheme;
