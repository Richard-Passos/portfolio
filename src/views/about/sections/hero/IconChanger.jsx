import { DataChanger } from '@/components';
import { MagneticButton } from '@/components/button';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
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
      useScrollRes: 'scrollY',
      prop: 'rotate',
      scrollPoints: [0, 400],
      propPoints: ['0deg', '360deg'],
      useTransformConfig: {
        clamp: false,
      },
    },
  };

  return (
    <ScrollAnimationTransform config={animationConfig.x}>
      <DataChanger
        className={cn('z-10 col-end-3', className)}
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
            <ScrollAnimationTransform config={animationConfig.rotate}>
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
            </ScrollAnimationTransform>
          </MagneticButton>
        </DataChanger.Action>
      </DataChanger>
    </ScrollAnimationTransform>
  );
};

export default AboutViewHeroIconChangerSection;
