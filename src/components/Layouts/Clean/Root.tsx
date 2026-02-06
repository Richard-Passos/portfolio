import { createPolymorphicComponent } from '@mantine/core';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type CleanLayoutsOwnProps = {};

type CleanLayoutsProps = CleanLayoutsOwnProps &
  Omit<SectionProps, keyof CleanLayoutsOwnProps>;

const CleanLayouts = ({ className, ...props }: CleanLayoutsProps) => {
  return (
    <Section
      className={cn(`3xl:min-h-fit min-h-fit justify-center`, className)}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'section', CleanLayoutsProps>(
  CleanLayouts
);
export type { CleanLayoutsProps };
