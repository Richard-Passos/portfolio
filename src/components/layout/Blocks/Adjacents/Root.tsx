import { ReactNode } from 'react';

import Section, { SectionProps } from '@/components/layout/wrappers/Section';
import { Action } from '@/components/molecules';
import { ActionLinkProps } from '@/components/molecules/Action/Link';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/system/Icon/icons';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type SingleProjectAdjacentsBlockOwnProps = {
  data: {
    prev: {
      label: ReactNode;
      name: ReactNode;
      href: ActionLinkProps['href'];
    };
    next: {
      label: ReactNode;
      name: ReactNode;
      href: ActionLinkProps['href'];
    };
  };
};

type SingleProjectAdjacentsBlockProps = MergeProps<
  SingleProjectAdjacentsBlockOwnProps,
  SectionProps
>;

const SingleProjectAdjacentsBlock = ({
  data,
  className,
  ...props
}: SingleProjectAdjacentsBlockProps) => {
  return (
    <Section
      className={cn(`min-h-fit 3xl:min-h-fit`, className)}
      {...props}
    >
      <div className='flex w-9by10 max-w-7xl flex-wrap justify-between gap-2.5 border border-x-0 border-b-0 p-4'>
        <Action
          as='link'
          className='h-fit'
          disabled={!data.prev.href}
          href={data.prev.href}
          magneticProps={{
            limit: {
              x: 0.15,
              y: 0.35
            }
          }}
          variant='default'
        >
          <div className='flex justify-start gap-2 py-3'>
            <ArrowLeftIcon className='mb-auto size-[1.25em]' />

            <div className='flex flex-col items-start gap-0.5'>
              <span className='max-w-24 overflow-hidden text-xs font-normal tracking-wide text-ellipsis opacity-50'>
                {data.prev.name}
              </span>

              <span className='mt-1'>{data.prev.label}</span>
            </div>
          </div>
        </Action>

        <Action
          as='link'
          className='h-fit'
          disabled={!data.next.href}
          href={data.next.href}
          magneticProps={{
            limit: {
              x: 0.15,
              y: 0.35
            }
          }}
          variant='default'
        >
          <div className='flex justify-end gap-2 py-3'>
            <div className='flex flex-col items-end gap-0.5'>
              <span className='max-w-24 overflow-hidden text-xs font-normal tracking-wide text-ellipsis opacity-50'>
                {data.next.name}
              </span>

              <span className='mt-1'>{data.next.label}</span>
            </div>

            <ArrowRightIcon className='mb-auto size-[1.25em]' />
          </div>
        </Action>
      </div>
    </Section>
  );
};

export { SingleProjectAdjacentsBlock };
export type { SingleProjectAdjacentsBlockProps };
