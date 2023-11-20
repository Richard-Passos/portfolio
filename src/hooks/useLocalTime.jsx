'use client';

import { useEffect, useState } from 'react';

const useLocalTime = (options) => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const dateOptions = {
      hour: '2-digit',
      hour12: true,
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo',
      timeZoneName: 'shortOffset',
      ...options,
    };

    const intervalId = setInterval(() => {
      const date = new Date();

      const formatedDate = date.toLocaleString(undefined, dateOptions);

      setLocalTime(formatedDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [options]);

  return localTime;
};

export default useLocalTime;
