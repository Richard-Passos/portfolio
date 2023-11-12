import { useRef, useState } from 'react';

const useChangeKeyWhenFalsy = (value) => {
  const [key, setKey] = useState(0),
    prevValue = useRef(value);

  if (!value && value !== prevValue.current) setKey((state) => state + 1);

  prevValue.current = value;

  return key;
};

export default useChangeKeyWhenFalsy;
