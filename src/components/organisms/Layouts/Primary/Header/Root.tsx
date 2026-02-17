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
        'w-9by10 mb-8 flex max-w-7xl gap-8 max-md:flex-col md:items-end',
        className
      )}
      {...props}
    >
      <Title
        order={2}
        {...titleProps}
        className={cn(
          'w-fit shrink-0 wrap-break-word uppercase',
          titleProps?.className
        )}
      >
        {serialize(title, {
          alignText: {
            className:
              'data-[align=right]:ml-[min(5vw,--spacing(10))] data-[align=right]:py-2 data-[align=right]:px-3 data-[align=right]:border data-[align=right]:bg-red-filled dark:data-[align=right]:bg-red-4/10 dark:data-[align=right]:border-red-4/20 data-[align=right]:rounded data-[align=right]:-rotate-3'
          }
        })}
      </Title>

      {renderComp(
        <section className='max-w-md -translate-y-3.5'>
          {serialize(description, {
            paragraph: {
              className: 'text-sm text-dimmed *:text-text'
            }
          })}
        </section>,
        [!!description.length]
      )}
    </header>
  );
};

export default PrimaryLayoutsHeaderOrganism;
export type { PrimaryLayoutsHeaderOrganismProps };
