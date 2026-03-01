type MergeProps<P1, P2, K extends keyof P2 = never> = P1 &
  Omit<P2, keyof P1 | K>;

export type { MergeProps };
