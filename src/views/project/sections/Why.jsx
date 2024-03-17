import {  Section } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewWhySection = ({  theme, className,data, ...props }) => {
  return (
    <Section
      className={cn('relative justify-center w-9/10 max-w-screen-md flex flex-col items-center',theme, className)}
      {...props}
    >
<section className='mb-lg mr-xl'>
  <Text.Title variants={{size: 'lg'}} className='mb-sm uppercase'>The problem</Text.Title>

<Text className='text-muted-content'>{data.problem}</Text>
</section>

<section className='ml-xl'>
  <Text.Title variants={{size: 'lg'}} className='mb-sm uppercase'>The solution</Text.Title>
  
<Text className='text-muted-content'>{data.solution}</Text>
</section>
    </Section>
  );
};

export default ProjectViewWhySection;