import { Section, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeSecondText = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <div>
        <Text className='w-[90%] max-w-screen-lg text-4xl font-semibold md:text-[2.5rem]/[1.15]'>
          <TextScrollAnimation
            className='mx-auto justify-center'
            text="If you're looking for a developer who's got the skills, the passion, and a problem solving mindset to make your ideas come true. Then..."
          />
        </Text>
      </div>
    </Section>
  );
};

export default HomeSecondText;
