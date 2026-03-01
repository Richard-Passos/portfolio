'use client';

import { DateTimeFormatOptions, useFormatter, useNow } from 'next-intl';
import { ComponentProps } from 'react';

import { timeZone } from '@/constants';
import { MergeProps } from '@/types';

type LocalTimeRootProps = MergeProps<
  {
    nowOptions?: Parameters<typeof useNow>[0];
    formatOptions?: DateTimeFormatOptions;
  },
  ComponentProps<'span'>
>;

const LocalTimeRoot = ({
  nowOptions,
  formatOptions,
  ...props
}: LocalTimeRootProps) => {
  const now = useNow({
      updateInterval: 1000 * 60 /* Per minute */,
      ...nowOptions
    }),
    format = useFormatter();

  return (
    <span {...props}>
      {format.dateTime(now, {
        hour: 'numeric',
        minute: 'numeric',
        timeZone,
        ...formatOptions
      })}
    </span>
  );
};

export { LocalTimeRoot };
export type { LocalTimeRootProps };
