import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { entries } from '@/utils/entries';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type BentoGridTemplates = {
  base: string | string[];
  sm?: string | string[];
  md?: string | string[];
  lg?: string | string[];
  xl?: string | string[];
  '2xl'?: string | string[];
};

export type BentoGridProps = MergeProps<{ templates: BentoGridTemplates }, SlotElementProps<'ul'>>;

export const BentoGrid = ({ templates, className, style, ...props }: BentoGridProps) => {
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

    if (Array.isArray(value)) {
      value = value.map((item) => `'${item}'`).join(' ');
    }

    return { ...obj, [key]: value };
  }, {});

  return (
    <SlotElement
      tag='ul'
      className={cn(
        'grid grid-cols-[repeat(auto-fit,minmax(0px,1fr))] gap-4 [grid-template-areas:var(--template)]',
        '[--template:var(--base-template)] sm:[--template:var(--sm-template)] md:[--template:var(--md-template)] lg:[--template:var(--lg-template)] xl:[--template:var(--xl-template)] 2xl:[--template:var(--2xl-template)]',
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
