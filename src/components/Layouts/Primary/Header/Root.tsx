import { ComponentProps } from 'react';

import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { cn, renderComp, serialize } from '@/utils';

type PrimaryLayoutsHeaderOrganismOwnProps = {
  title: Parameters<typeof serialize>['0'];
  description?: Parameters<typeof serialize>['0'];
  titleProps?: Partial<TitleProps>;
};

type PrimaryLayoutsHeaderOrganismProps = PrimaryLayoutsHeaderOrganismOwnProps &
  Omit<ComponentProps<'header'>, keyof PrimaryLayoutsHeaderOrganismOwnProps>;

const PrimaryLayoutsHeaderOrganism = ({
  className,
  title,
  description = [],
  titleProps,
  ...props
}: PrimaryLayoutsHeaderOrganismProps) => {
  return (
    <header
      className={cn(
        `w-9by10 flex gap-8 max-md:flex-col md:items-end`,
        className
      )}
      {...props}
    >
      <Title
        order={2}
        {...titleProps}
        className={cn(
          `shrink-0 pl-[min(10vw,--spacing(20))] wrap-break-word uppercase data-[align=left]:*:-ml-[min(10vw,--spacing(20))]`,
          titleProps?.className
        )}
      >
        {serialize(title)}
      </Title>

      <section className='max-w-md -translate-y-3.5'>
        {renderComp(
          serialize(description, {
            paragraph: {
              className: 'text-sm text-dimmed *:text-text'
            }
          }),
          [!!description.length]
        )}
      </section>
    </header>
  );
};

export default PrimaryLayoutsHeaderOrganism;
export type { PrimaryLayoutsHeaderOrganismProps };
