import { createPolymorphicComponent } from '@mantine/core';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type CleanLayoutOwnProps = {};

type CleanLayoutProps = CleanLayoutOwnProps &
  Omit<SectionProps, keyof CleanLayoutOwnProps>;

const CleanLayout = ({ className, ...props }: CleanLayoutProps) => {
  return (
    <Section
      className={cn(`3xl:min-h-fit min-h-fit justify-center`, className)}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'section', CleanLayoutProps>(
  CleanLayout
);
export type { CleanLayoutProps };
