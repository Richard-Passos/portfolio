'use client';

import { ComponentProps } from 'react';

import data from './Root.data';

export type LocalTimeProps = ComponentProps<'span'>;

export const LocalTime = (props: LocalTimeProps) => {
  const currentTime = new Date().toLocaleString('pt-BR', { timeZone: data.timeZone });

  return <span {...props}>{currentTime}</span>;
};
