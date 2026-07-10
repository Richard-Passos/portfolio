'use client';

import data from './Root.data';
import { ComponentProps } from 'react';

export type LocalTimeProps = ComponentProps<'span'>

export const LocalTime = (props: LocalTimeProps) => {
  const currentTime = new Date().toLocaleString('pt-BR', { timeZone: data.timeZone });

  return (
    <span {...props}>
      {currentTime}
    </span>
  );
};
