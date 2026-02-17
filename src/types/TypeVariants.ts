import { ComponentProps, ComponentType } from 'react';

type TypeVariants<T extends Record<string, ComponentType<any>>> = {
  [K in keyof T]: {
    type: K;
  } & ComponentProps<T[K]>;
}[keyof T];

export default TypeVariants;
