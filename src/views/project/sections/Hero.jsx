import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewHeroSection = ({ data, theme, className, ...props }) => {
  return (
     <section
      className={cn(
        'flex flex-col items-center justify-center py-lg max-2xl:min-h-[calc(100svh-var(--header-h))]',
        theme,
        className,
      )}
      {...props}
    >
      <Text.Title
        className='max-w-4xl text-center'
        variants={{ size: 'xl' }}
      >
        {data.title}
      </Text.Title>

      <Text className='max-w-xl text-center text-muted-content'>
        {data.description}
      </Text>
    </section>
  );
};

export default ProjectViewHeroSection;
