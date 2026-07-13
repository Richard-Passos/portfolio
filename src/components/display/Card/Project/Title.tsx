import { Title, TitleProps } from '@/components/system/Title';
import { cn } from '@/utils/cn';

export type ProjectCardTitleProps = TitleProps;

export const ProjectCardTitle = ({ className, ...props }: ProjectCardTitleProps) => {
  return (
    <Title
      as='h5'
      title={props.children?.toString()}
      className={cn('mr-8 line-clamp-1', className)}
      {...props}
    />
  );
};
