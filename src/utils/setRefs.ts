import { ForwardedRef } from 'react';

export const setRefs = <T = any>(...refs: (ForwardedRef<T> | undefined)[]) => {
  return (node: T) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    });
};
