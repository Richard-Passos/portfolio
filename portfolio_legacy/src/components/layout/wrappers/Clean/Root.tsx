import { Bg, Lines } from '@/components/misc';
import { cn } from '@/utils';

import { Section, SectionProps } from '../Section';

type CleanLayoutProps = SectionProps;

const CleanLayout = ({ className, children, ...props }: CleanLayoutProps) => {
  return (
    <Section
      className={cn('3xl:min-h-fit min-h-fit justify-center', className)}
      {...props}
    >
      {children}

      <Bg>
        <Lines />
      </Bg>
    </Section>
  );
};

export { CleanLayout };
export type { CleanLayoutProps };
