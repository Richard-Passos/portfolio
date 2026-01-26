import { createPolymorphicComponent } from '@mantine/core';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type CleanLayoutBlockOrganismOwnProps = {};

type CleanLayoutBlockOrganismProps = CleanLayoutBlockOrganismOwnProps &
  Omit<SectionProps, keyof CleanLayoutBlockOrganismOwnProps>;

const CleanLayoutBlockOrganism = ({
  className,
  ...props
}: CleanLayoutBlockOrganismProps) => {
  return (
    <Section
      className={cn(`3xl:min-h-fit min-h-fit justify-center`, className)}
      {...props}
    />
  );
};

export default createPolymorphicComponent<
  'section',
  CleanLayoutBlockOrganismProps
>(CleanLayoutBlockOrganism);
export type { CleanLayoutBlockOrganismProps };
