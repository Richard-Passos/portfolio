import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';

export type CtaTitleProps = TitleProps;

export const CtaTitle = ({ className, ...props }: CtaTitleProps) => {
  return (
    <Title
      styleAs='h6'
      className={cn('mr-auto leading-relaxed tracking-widest uppercase', className)}
      {...props}
    />
  );
};
