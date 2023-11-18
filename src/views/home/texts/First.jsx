import { Section, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeFirstText = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <div>
        <Text className='w-[86%] text-center text-[clamp(1rem,3.3vw,3rem)] leading-tight'>
          <TextScrollAnimation
            lines={[
              'When it comes to full stack, attention to details is the',
              'main requirement. I got that eagle eye that can spot',
              'even the smallest imperfections and make sure your',
              'project works perfectly.',
            ]}
          />
        </Text>
      </div>
    </Section>
  );
};

export default HomeFirstText;
