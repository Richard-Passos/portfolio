import { createPolymorphicComponent } from '@mantine/core';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import PrimaryLayoutsHeader, { PrimaryLayoutsHeaderProps } from './Header';

type PrimaryLayoutsOwnProps = {
  data: {
    title: PrimaryLayoutsHeaderProps['title'];
    description?: PrimaryLayoutsHeaderProps['description'];
  };
  headerProps?: Partial<PrimaryLayoutsHeaderProps>;
};

type PrimaryLayoutsProps = PrimaryLayoutsOwnProps &
  Omit<SectionProps, keyof PrimaryLayoutsOwnProps>;

const PrimaryLayouts = ({
  children,
  data,
  headerProps,
  ...props
}: PrimaryLayoutsProps) => {
  return (
    <Section {...props}>
      <PrimaryLayoutsHeader
        description={data.description}
        title={data.title}
        {...headerProps}
      />

      {children}
    </Section>
  );
};

export default createPolymorphicComponent<'section', PrimaryLayoutsProps>(
  PrimaryLayouts
);
export type { PrimaryLayoutsProps };
