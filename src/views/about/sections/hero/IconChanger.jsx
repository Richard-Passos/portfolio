import { DataChanger } from '@/components';
import { MagneticButton } from '@/components/button';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Icon } from '@/components/ui';
import { cn } from '@/utils';

const DATA_CHANGER_DURATION = 2500,
  ANIMATION_CONFIG = {
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

const AboutViewHeroIconChangerSection = ({
  className,
  data = [],
  ...props
}) => {
  return (
    <ScrollAnimateTransform config={ANIMATION_CONFIG.x}>
      <DataChanger
        className={cn('z-10 col-end-3', className)}
        duration={DATA_CHANGER_DURATION}
        lastIdx={data.length - 1}
        {...props}
      >
        <DataChanger.Action asChild>
          <MagneticButton
            className='[&_svg]:size-[40%]'
            limit={0.2}
            variants={{ size: 'lg' }}
          >
            <ScrollAnimateTransform config={ANIMATION_CONFIG.rotate}>
              <div className='relative flex size-full items-center justify-center'>
                {data.map((icon, i) => (
                  <DataChanger.Item
                    asChild
                    idx={i}
                    key={icon.src}
                  >
                    <Icon
                      className='transition-[clip-path] [clip-path:inset(100%_0_0_0)] data-active:duration-500 data-active:[clip-path:inset(0)]'
                      {...icon}
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
