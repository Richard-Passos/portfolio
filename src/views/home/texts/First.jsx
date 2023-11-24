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
        <div className='flex w-[90%] max-w-screen-xl justify-end'>
          <Text className='text-[clamp(1rem,2.2vw,2rem)] leading-tight'>
            <TextScrollAnimation
              lines={[
                'Helping brands achieve digital prominence.',
                'I bring a passion for cutting-edge technology',
                'and a commitment to transforming ideas into',
                'impactful, user-centric solutions.',
              ]}
            />
          </Text>
        </div>
      </div>
    </Section>
  );
};

export default HomeFirstText;
