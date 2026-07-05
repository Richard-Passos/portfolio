'use client';

import { DateTimeFormatOptions, useFormatter, useNow } from 'next-intl';
import { ComponentProps } from 'react';

import { timeZone } from '@/constants';
import { MergeProps } from '@/types';

type LocalTimeProps = MergeProps<
  {
    nowOptions?: Parameters<typeof useNow>[0];
    formatOptions?: DateTimeFormatOptions;
  },
  ComponentProps<'span'>
>;

const LocalTime = ({
  nowOptions,
  formatOptions,
  ...props
}: LocalTimeProps) => {
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
        timeZone: ,
        ...formatOptions
      })}
    </span>
  );
};

export { LocalTime };
export type { LocalTimeProps };
