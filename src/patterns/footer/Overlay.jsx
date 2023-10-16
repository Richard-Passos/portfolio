import ScrollAnimation from '@/components/scroll-animation';
import { cn } from '@/utils';

const FooterOverlay = ({ className, ...props }) => {
  const animationConfig = {
    y: {
      useScrollConfig: {
        offset: ['0 1', '1 1'],
      },
      propPoints: ['0', '-105%'],
    },
    borderRadius: {
      useScrollConfig: {
        offset: ['0 1', '1.05 1'],
      },
      useScrollRes: 'scrollYProgress',
      prop: '--radius',
      scrollPoints: [0, 1],
      propPoints: ['150rem', '0%'],
    },
  };

  return (
    <ScrollAnimation.Translate
      className={cn('bg-main z-10 h-full w-[150%] shadow-2xl', className)}
      config={animationConfig.y}
      {...props}
    >
      <ScrollAnimation
        className='rounded-b-[--radius]'
        config={animationConfig.borderRadius}
      >
        <span />
      </ScrollAnimation>
    </ScrollAnimation.Translate>
  );
};

export default FooterOverlay;
