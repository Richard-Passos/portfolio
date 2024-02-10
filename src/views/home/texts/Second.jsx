import { Bg, Lines, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeSecondText = ({ theme, className, ...props }) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center py-[min(28vh,theme(spacing.28))] max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds',
        theme,
        className,
      )}
      {...props}
    >
      <Text className='w-[90%] max-w-screen-lg text-4xl font-medium md:text-[2.5rem]/tight'>
        <TextScrollAnimation
          className='mx-auto justify-center'
          text="If you're looking for a developer who's got the skills, the passion, and a problem solving mindset to make your ideas come true. Then..."
        />
      </Text>

      <Bg />

      <Lines />
    </div>
  );
};

export default HomeSecondText;
