import { Title, TitleProps } from '@/components/system/Title';
import { cn } from '@/utils/cn';

export type CareerCardTitleProps = TitleProps;

export const CareerCardTitle = ({ className, ...props }: CareerCardTitleProps) => {
  return (
    <Title
      as='h5'
      title={props.children?.toString()}
      className={cn('mr-8 line-clamp-1 shrink-0 basis-full overflow-hidden', className)}
      {...props}
    />
  );
};
