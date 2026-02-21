import { createPolymorphicComponent } from '@mantine/core';

import Section, { SectionProps } from '@/components/organisms/Section';

import PrimaryLayoutHeader, { PrimaryLayoutHeaderProps } from './Header';

type PrimaryLayoutOwnProps = {
  data: {
    title: PrimaryLayoutHeaderProps['title'];
    description?: PrimaryLayoutHeaderProps['description'];
  };
  headerProps?: Partial<PrimaryLayoutHeaderProps>;
};

type PrimaryLayoutProps = PrimaryLayoutOwnProps &
  Omit<SectionProps, keyof PrimaryLayoutOwnProps>;

const PrimaryLayout = ({
  children,
  data,
  headerProps,
  ...props
}: PrimaryLayoutProps) => {
  return (
    <Section {...props}>
      <PrimaryLayoutHeader
        description={data.description}
        title={data.title}
        {...headerProps}
      />

      {children}
    </Section>
  );
};

export default createPolymorphicComponent<'section', PrimaryLayoutProps>(
  PrimaryLayout
);
export type { PrimaryLayoutProps };
