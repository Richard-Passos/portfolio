import { Bg, Lines, MultiY, TextScrollAnimation } from '@/components';
import { SmileIcon } from '@/components/ui/icon/icons';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeViewSecondText = ({ theme, className, ...props }) => {
  return (
    <div
      className={cn(
        'py-lg relative flex w-full items-center justify-center max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds',
        theme,
        className,
      )}
      {...props}
    >
      <Text className='w-9/10 max-w-screen-lg text-4xl/tight font-medium md:text-[3.5rem]/tight'>
        <TextScrollAnimation
          className='mx-auto justify-center'
          text="If you're looking for a developer who's got the skills, the passion, and a problem solving mindset to make your ideas come true. Then..."
        />
      </Text>

      <Bg />

      <Lines />

      <MultiY>
        <SmileIcon />
      </MultiY>
    </div>
  );
};

export default HomeViewSecondText;
