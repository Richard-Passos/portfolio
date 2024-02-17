import { Section } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkViewWhyMe = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'relative flex w-full flex-col items-center justify-center gap-sm',
        className,
      )}
      {...props}
    >
      <section className='w-9/10 flex flex-col items-center gap-sm'>
        <Text.Title
          className='flex flex-col items-center text-center font-bold'
          variants={{ size: 'xl' }}
        >
          <span className='text-[.15em] tracking-normal text-muted-content'>
            Why
          </span>{' '}
          <span className='ml-auto'>me</span>
        </Text.Title>

        <Text className='max-w-lg text-center text-muted-content'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          doloremque aspernatur architecto dolor eos. Harum minima modi deserunt
          culpa commodi! Facilis eveniet ad illo delectus?
        </Text>
      </section>
    </Section>
  );
};

export default WorkViewWhyMe;
