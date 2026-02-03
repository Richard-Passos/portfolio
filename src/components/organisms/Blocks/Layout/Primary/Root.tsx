import { createPolymorphicComponent } from '@mantine/core';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import { PrimaryLayoutBlockProps } from '.';
import PrimaryLayoutBlockHeader, {
  PrimaryLayoutBlockHeaderProps
} from './Header';

type PrimaryLayoutBlockOrganismOwnProps = {
  data: {
    title: PrimaryLayoutBlockHeaderProps['title'];
    description?: PrimaryLayoutBlockHeaderProps['description'];
  };
  headerProps?: Partial<PrimaryLayoutBlockHeaderProps>;
};

type PrimaryLayoutBlockOrganismProps = PrimaryLayoutBlockOrganismOwnProps &
  Omit<SectionProps, keyof PrimaryLayoutBlockOrganismOwnProps>;

const PrimaryLayoutBlockOrganism = ({
  children,
  data,
  headerProps,
  ...props
}: PrimaryLayoutBlockOrganismProps) => {
  return (
    <Section {...props}>
      <PrimaryLayoutBlockHeader
        description={data.description}
        title={data.title}
        {...headerProps}
        className={cn('mb-8', headerProps?.className)}
      />

      {children}
    </Section>
  );
};

export default createPolymorphicComponent<'section', PrimaryLayoutBlockProps>(
  PrimaryLayoutBlockOrganism
);
export type { PrimaryLayoutBlockOrganismProps };
