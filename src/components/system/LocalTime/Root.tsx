'use client';

import data from './.data';

import { setRefs } from '@/utils/setRefs';
import { ComponentProps, useEffect, useRef } from 'react';

export type LocalTimeProps = ComponentProps<'span'>;

export const LocalTime = ({ ref, ...props }: LocalTimeProps) => {
  const getTime = () =>
    new Date().toLocaleTimeString('pt-BR', {
      timeZone: data.timeZone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      el.textContent = getTime();
    }, 1000 * 60); // Every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {getTime()}
    </span>
  );
};
