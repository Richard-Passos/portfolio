import { DataChanger } from '@/components';
import { MagneticButton } from '@/components/button';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Icon } from '@/components/ui';
import { cn } from '@/utils';

const ICONS = ['Smile', 'Globe', 'Rocket'];

const AboutViewHeroIconChangerSection = ({ className, ...props }) => {
  const animationConfig = {
    x: {
      prop: 'x',
      propPoints: ['-25%', '25%'],
    },
    rotate: {
      scroll: 'scrollY',
      scrollPoints: [0, 400],
      prop: 'rotate',
      propPoints: ['0deg', '360deg'],
      transformConfig: {
        clamp: false,
      },
    },
  };

  return (
    <ScrollAnimateTransform config={animationConfig.x}>
      <DataChanger
        className={cn('z-10 col-end-3', className)}
        duration={2500}
        lastIdx={ICONS.length - 1}
        {...props}
      >
        <DataChanger.Action asChild>
          <MagneticButton
            aria-label='Change icon'
            className='[&_svg]:size-[40%]'
            limit={0.2}
            variants={{ size: 'lg' }}
          >
            <ScrollAnimateTransform config={animationConfig.rotate}>
              <div className='relative flex size-full items-center justify-center'>
                {ICONS.map((icon, i) => (
                  <DataChanger.Item
                    asChild
                    idx={i}
                    key={icon}
                  >
                    <Icon
                      className='transition-[clip-path] [clip-path:inset(100%_0_0_0)] data-active:duration-500 data-active:[clip-path:inset(0)]'
                      name={icon}
                    />
                  </DataChanger.Item>
                ))}
              </div>
            </ScrollAnimateTransform>
          </MagneticButton>
        </DataChanger.Action>
      </DataChanger>
    </ScrollAnimateTransform>
  );
};

export default AboutViewHeroIconChangerSection;
