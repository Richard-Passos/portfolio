import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewImagesSection = async ({
  promise,
  theme,
  className,
  ...props
}) => {
  const data = await promise;

  return (
    <section
      className={cn('', theme, className)}
      {...props}
    >
      <Text.Title variants={{ size: 'xl' }}>{data.title}</Text.Title>
    </section>
  );
};

export default ProjectViewImagesSection;
