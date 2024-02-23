import { Bg, Lines, TextScrollAnimation } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { GlobeIcon, SmileIcon } from '@/components/ui/icon/icons';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeViewSecondText = ({ theme, className, ...props }) => {
  const animationConfig = {
    useScrollRes: 'scrollY',
    prop: '--rotate',
    scrollPoints: [0, 400],
    propPoints: ['0deg', '360deg'],
    useTransformConfig: { clamp: false },
  };

  return (
    <ScrollAnimationTransform config={animationConfig}>
      <div
        className={cn(
          'relative flex w-full items-center justify-center py-lg max-2xl:min-h-screen max-2xl:overflow-hidden 2xl:h-screen 2xl:max-h-bounds',
          theme,
          className,
        )}
        {...props}
      >
        <Text className='w-9/10 max-w-screen-lg text-center text-4xl/tight font-semibold md:text-5xl/tight'>
          <TextScrollAnimation text="If you're looking for a developer who's got the skills, passion and a problem solving mindset to make your ideas come true. Then..." />
        </Text>

        <SmileIcon className='absolute left-0 top-0 -z-10 size-[min(50vmin,theme(maxWidth.md))] -translate-x-1/2 rotate-[--rotate] opacity-10 dark:opacity-5' />

        <GlobeIcon className='absolute bottom-0 right-0 -z-10 size-[min(50vmin,theme(maxWidth.md))] translate-x-1/2 -rotate-[--rotate] opacity-10 dark:opacity-5' />

        <Bg />

        <Lines />
      </div>
    </ScrollAnimationTransform>
  );
};

export default HomeViewSecondText;
