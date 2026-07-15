'use client';

import { ComponentProps } from 'react';

import data from './Root.data';

export type LocalTimeProps = ComponentProps<'span'>;

export const LocalTime = (props: LocalTimeProps) => {
  const currentTime = new Date().toLocaleTimeString('pt-BR', {
    timeZone: data.timeZone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return <span {...props}>{currentTime}</span>;
};
