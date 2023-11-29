import { Lines, Section, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeFirstText = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn(
        'relative flex items-center justify-center py-6',
        className,
      )}
      {...props}
    >
      <div>
        <div className='absolute inset-0 overflow-hidden bg-main transition-bg'>
          <span className='absolute inset-x-[5%] top-0 h-px w-auto bg-content transition-bg' />

          <Lines className='absolute z-0' />
        </div>

        <div className='relative z-10 flex w-[90%] max-w-screen-xl flex-col items-center gap-6'>
          <Text className='font-semibold max-md:text-sm max-sm:text-center sm:mr-auto'>
            Richard Passos — developer
          </Text>

          <Text className='max-w-2xl text-2xl leading-tight sm:ml-auto md:text-3xl'>
            <TextScrollAnimation
              className='max-sm:justify-center'
              text='Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and a commitment to transforming ideas into impactful, user-centric solutions.'
            />
          </Text>
        </div>
      </div>
    </Section>
  );
};

export default HomeFirstText;
