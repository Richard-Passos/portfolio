import { Section, SectionProps } from '@/components/layout/wrappers';
import { Bg, Lines } from '@/components/misc';
import { MergeProps } from '@/types';

import { PrimaryLayoutHeader, PrimaryLayoutHeaderProps } from './Header';

type PrimaryLayoutOwnProps = {
  data: Pick<PrimaryLayoutHeaderProps, 'title' | 'description'>;
  headerProps?: Partial<PrimaryLayoutHeaderProps>;
};

type PrimaryLayoutProps = MergeProps<PrimaryLayoutOwnProps, SectionProps>;

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

      <Bg>
        <Lines />
      </Bg>
    </Section>
  );
};

export { PrimaryLayout };
export type { PrimaryLayoutProps };
