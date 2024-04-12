import { ScrollAnimate, Section, TextScrollAnimate } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  x: {
    scrollConfig: {
      offset: ['-.5 .5', '0 .5'],
    },
    prop: '--x',
    propPoints: ['-101%', '0%'],
  },
  clipPath: {
    scrollConfig: {
      offset: ['.5 .5', '.75 .5'],
    },
    prop: '--clip-path',
    propPoints: ['inset(0% -1% 0 0)', 'inset(100% -1% 0 0)'],
  },
  y: {
    scrollConfig: {
      offset: ['.5 .5', '1 .5'],
    },
    prop: 'y',
    propPoints: ['0%', '50%'],
  },
  top: {
    scrollConfig: {
      offset: ['-1 .5', '0 .5'],
    },
    prop: '--top',
    propPoints: ['0%', '-50%'],
  },
};

const HomeViewButSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      className={cn(
        'grid !min-h-[calc(var(--h)*1.5)] grid-rows-3 justify-items-center [--h:100vh] 2xl:[--h:--max-h]',
        className,
      )}
      {...props}
    >
      <ScrollAnimate config={ANIMATION_CONFIG.x}>
        <ScrollAnimate config={ANIMATION_CONFIG.clipPath}>
          <ScrollAnimate.Transform config={ANIMATION_CONFIG.y}>
            <div className='row-span-2 flex items-center py-md [clip-path:inset(0_-100%_0_0)]'>
              <Text className='relative translate-x-[--x] text-[clamp(8rem,44vw,32rem)]/none font-bold uppercase tracking-tighter'>
                <span className='outline-text text-muted-content'>
                  {data.title}
                </span>

                <span
                  aria-hidden
                  className='pointer-events-none absolute left-0 select-none [clip-path:--clip-path]'
                >
                  {data.title}
                </span>
              </Text>
            </div>
          </ScrollAnimate.Transform>
        </ScrollAnimate>
      </ScrollAnimate>

      <ScrollAnimate config={ANIMATION_CONFIG.top}>
        <div className='flex w-9/10 items-center justify-center'>
          <Text className='relative top-[--top] text-center text-[clamp(2rem,6.6vw,6rem)]/tight font-semibold'>
            <TextScrollAnimate text={data.description} />
          </Text>
        </div>
      </ScrollAnimate>
    </Section>
  );
};

export default HomeViewButSection;
