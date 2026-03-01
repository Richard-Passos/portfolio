import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc';
import { MergeProps } from '@/types';
import { cn, entries } from '@/utils';

type BentoGridRootProps = MergeProps<
  {
    templates: {
      base: string | string[];
      sm?: string | string[];
      md?: string | string[];
      lg?: string | string[];
      xl?: string | string[];
      '2xl'?: string | string[];
    };
  },
  SlotAsChildProps<ComponentProps<'ul'>>
>;

const BentoGridRoot = ({
  asChild,
  templates,
  className,
  style,
  ...props
}: BentoGridRootProps) => {
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

  const Comp = asChild ? Slot : 'ul';

  return (
    <Comp
      className={cn(
        `m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(0px,1fr))] gap-2.5 p-0 [--template:var(--base-template)] [grid-template-areas:var(--template)] sm:[--template:var(--sm-template)] md:[--template:var(--md-template)] lg:[--template:var(--lg-template)] xl:[--template:var(--xl-template)] 2xl:[--template:var(--2xl-template)]`,
        className
      )}
      style={{
        ...cssTemplates,
        ...style
      }}
      {...props}
    />
  );
};

export { BentoGridRoot };
export type { BentoGridRootProps };
