'use client';

import { useLocalTime } from '@/hooks';

const LocalTime = ({ options }) => {
  const localTime = useLocalTime(options);

  return localTime;
};

export default LocalTime;
