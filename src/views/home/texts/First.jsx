import { Section, TextScrollAnimation } from '@/components';
import { Link } from '@/components/ui';
import { Text } from '@/components/ui/text';
import { availabilityMessage } from '@/constants';
import { cn } from '@/utils';

const HomeFirstText = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <div>
        <div className='flex w-[90%] max-w-screen-xl justify-between'>
          <Text className='mb-auto flex -translate-y-6 items-center font-semibold'>
            Richard Passos — developer
          </Text>

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
