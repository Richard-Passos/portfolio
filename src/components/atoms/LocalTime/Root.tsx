'use client';

import { DateTimeFormatOptions, useFormatter, useNow } from 'next-intl';
import { ComponentProps } from 'react';

import { timeZone } from '@/constants';

type LocalTimeAtomOwnProps = {
  nowOptions?: Parameters<typeof useNow>[0];
  formatOptions?: DateTimeFormatOptions;
};

type LocalTimeAtomProps = LocalTimeAtomOwnProps &
  Omit<ComponentProps<'span'>, keyof LocalTimeAtomOwnProps>;

const LocalTimeAtom = ({
  nowOptions,
  formatOptions,
  ...props
}: LocalTimeAtomProps) => {
  const now = useNow({ updateInterval: 1000, ...nowOptions }),
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

export default LocalTimeAtom;
export type { LocalTimeAtomProps };
