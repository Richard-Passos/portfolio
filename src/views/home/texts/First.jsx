import { Lines, Section, TextScrollAnimation } from '@/components';
import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeFirstText = ({ className, ...props }) => {
  return (
    <Section
      asChild
      className={cn('relative flex items-center justify-center', className)}
      {...props}
    >
      <div>
        <div className='absolute inset-0 overflow-hidden bg-main transition-bg'>
          <span className='absolute inset-x-[5%] top-0 h-px w-auto bg-content transition-bg' />

          <Lines className='absolute' />
        </div>

        <div className='relative z-10 flex w-[90%] max-w-screen-xl justify-between'>
          <Text className='-translate-y-6 font-semibold'>
            Richard Passos — developer
          </Text>

          <Text className='max-w-2xl text-[clamp(1rem,2.2vw,2rem)] leading-tight'>
            <TextScrollAnimation text='Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and a commitment to transforming ideas into impactful, user-centric solutions.' />
          </Text>
        </div>
      </div>
    </Section>
  );
};

export default HomeFirstText;
