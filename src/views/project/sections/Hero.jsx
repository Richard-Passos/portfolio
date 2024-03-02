import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewHeroSection = ({ data, theme, className, ...props }) => {
  return (
    <section
      className={cn('', theme, className)}
      {...props}
    >
      <Text.Title variants={{ size: 'xl' }}>{data.title}</Text.Title>
    </section>
  );
};

export default ProjectViewHeroSection;
