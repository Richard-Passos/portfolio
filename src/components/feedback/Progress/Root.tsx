import { Progress, ProgressProps as ProgressRootProps } from '@mantine/core';

const ProgressRoot = ({ style, ...props }: ProgressRootProps) => {
  return (
    <Progress
      style={{
        '--progress-size-xs': 'calc(.1em * var(--mantine-scale))',
        ...style
      }}
      {...props}
    />
  );
};

export { ProgressRoot };
export type { ProgressRootProps };
