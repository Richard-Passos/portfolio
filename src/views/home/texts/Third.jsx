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
        <Text className='w-[86%] text-center text-[clamp(1rem,3.3vw,3rem)] leading-tight'>
          <TextScrollAnimation
            className='mx-auto items-center'
            lines={[
              "If you're looking for a developer who's got the skills,",
              'the passion, and a problem solving mindset to make',
              'your ideas come true. Then...',
            ]}
          />
        </Text>
      </div>
    </Section>
  );
};

export default HomeThirdText;
