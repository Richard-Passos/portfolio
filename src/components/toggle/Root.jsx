'use client';

import { useEffect, useRef } from 'react';

import { Button } from '../ui';

const Root = ({ children, ...props }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current)
      ref.current.addEventListener('keypress', (ev) =>
        clickOnKeyPress(ev, ref),
      );
  }, [ref]);

  return (
    <Button
      asChild
      role='button'
      tabIndex={0}
      {...props}
    >
      <label ref={ref}>{children}</label>
    </Button>
  );
};

const KEYS = ['Enter', ' '];

const clickOnKeyPress = (ev, elementRef) => {
  if (KEYS.includes(ev.key)) {
    ev.preventDefault();

    elementRef.current.click();
  }
};

export default Root;
