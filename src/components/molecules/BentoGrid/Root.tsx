import { createPolymorphicComponent } from '@mantine/core';

import Box, { BoxProps } from '@/components/atoms/Box';
import { PolymorphicRef } from '@/types';
import { cn, entries } from '@/utils';

type BentoGridMoleculeOwnProps = {
  templates: {
    base: string | string[];
    sm?: string | string[];
    md?: string | string[];
    lg?: string | string[];
    xl?: string | string[];
    '2xl'?: string | string[];
  };
  ref?: PolymorphicRef<'ul'> & BoxProps['ref'];
};

type BentoGridMoleculeProps = BentoGridMoleculeOwnProps &
  Omit<BoxProps, keyof BentoGridMoleculeOwnProps>;

const BentoGridMolecule = ({
  templates,
  className,
  style,
  ...props
}: BentoGridMoleculeProps) => {
  templates = {
    sm: 'var(--base-template)',
    md: 'var(--sm-template)',
    lg: 'var(--md-template)',
    xl: 'var(--lg-template)',
    '2xl': 'var(--xl-template)',
    ...templates
  };

  const cssTemplates = entries(templates).reduce((obj, [key, value]) => {
    key = `--${key}-template`;

    if (Array.isArray(value))
      value = value.map((item) => `'${item}'`).join(' ');

    return { ...obj, [key]: value };
  }, {});

  return (
    <Box
      className={cn(
        `gap-xs m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(0px,1fr))] p-0 [--template:--base-template] [grid-template-areas:--template] sm:[--template:--sm-template] md:[--template:--md-template] lg:[--template:--lg-template] xl:[--template:--xl-template] 2xl:[--template:--2xl-template]`,
        className
      )}
      component='ul'
      style={{
        ...cssTemplates,
        ...style
      }}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'ul', BentoGridMoleculeProps>(
  BentoGridMolecule
);
export type { BentoGridMoleculeProps };
