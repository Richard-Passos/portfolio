import { Section, SectionProps } from '@/components/layout/Section';
import { cn } from '@/utils/cn';

export type CareerProps = SectionProps;

export const Career = ({ className, ...props }: CareerProps) => {
  return (
    <Section
      className={cn('w-full', className)}
      {...props}
    />
  );
};
