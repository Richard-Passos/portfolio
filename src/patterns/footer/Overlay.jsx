import { ScrollAnimation } from '@/components';
import { cn } from '@/utils';

const FooterOverlay = ({ className, ...props }) => {
  const animationConfig = {
    height: {
      useScrollConfig: {
        offset: ['0 1', '1 0'],
      },
      useScrollRes: 'scrollYProgress',
      prop: 'height',
      scrollPoints: [0, 1],
      propPoints: ['79px', '0px'],
    },
  };

  return (
    <ScrollAnimation
      className={cn('absolute top-0 z-10 w-full -translate-y-px', className)}
      config={animationConfig.height}
      layout
      {...props}
    >
      <div>
        <span className='absolute left-1/2 h-[750%] w-[150%] -translate-x-1/2 -translate-y-[86.666%] rounded-[50%] bg-main shadow-2xl' />
      </div>
    </ScrollAnimation>
  );
};

export default FooterOverlay;
