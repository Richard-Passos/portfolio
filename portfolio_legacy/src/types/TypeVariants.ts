import { ComponentProps, ComponentType } from 'react';

type TypeVariants<T extends Record<string, ComponentType<any>>> = {
  [K in keyof T]: ComponentProps<T[K]>['data'];
};

export type { TypeVariants };
