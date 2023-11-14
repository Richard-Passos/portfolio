import { Section, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeThirdText = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <div>
        <Text className='w-[86%] text-center text-5xl leading-tight'>
          <TextScrollAnimation
            text="If you're looking for a developer who's got the skills, the
          passion, and a problem solving mindset to make your ideas come true."
          />{' '}
          <span className='group relative'>
            <TextScrollAnimation text='Then ...' />
            {''}
            <span className='absolute left-1/2 top-full w-max -translate-x-1/2 -translate-y-2 scale-95 text-sm opacity-0 transition-all group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100'>
              Keep scrolling.
            </span>
          </span>
        </Text>
      </div>
    </Section>
  );
};

export default HomeThirdText;
