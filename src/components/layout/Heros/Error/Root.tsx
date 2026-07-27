import { Section, SectionProps } from '@/components/layout/Section';
import { cn } from '@/utils/cn';

export type ErrorHeroProps = SectionProps;

export const ErrorHero = ({ className, ...props }: ErrorHeroProps) => {
  return (
    <Section
      forceTheme
      className={cn('w-full', className)}
      {...props}
    />
  );
};
