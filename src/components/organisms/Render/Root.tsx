import { ComponentProps, ComponentType } from 'react';

type RenderOrganismProps<
  T extends Record<string, ComponentType<any>>,
  K extends keyof T = keyof T
> = {
  type: K;
  fn: (key: K) => T[K];
} & ComponentProps<T[K]>;

const RenderOrganism = <T extends Record<string, ComponentType<any>>>({
  type,
  fn,
  ...props
}: RenderOrganismProps<T>) => {
  const Comp = fn(type) as ComponentType<any>;

  return <Comp {...props} />;
};

export default RenderOrganism;
export type { RenderOrganismProps };
