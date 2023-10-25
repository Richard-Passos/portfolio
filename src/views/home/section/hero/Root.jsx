import { ScrollIndicator, Section } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

import Title from './Title';

const HomeSectionHero = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col justify-between p-24', className)}
      theme='light'
      {...props}
    >
      <Title />

      <div className='relative flex w-full'>
        <Text className='max-w-lg text-lg'>
          Hi there! I&apos;m Richard, an awesome{' '}
          <strong>full-stack developer</strong> who cares building solid and
          scalable products with a great user experience.
        </Text>

        <ScrollIndicator className='-bottom-24 right-0' />
      </div>
    </Section>
  );
};

export default HomeSectionHero;
