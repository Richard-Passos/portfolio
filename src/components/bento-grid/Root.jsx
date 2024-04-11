import { cn } from '@/utils';

const BentoGrid = ({ className, style, ...props }) => {
  return (
    <ul
      className={cn('grid gap-xs [grid-template-areas:--template] [--template:--default-template] sm:[--template:--sm-template] md:[--template:--md-template] lg:[--template:--lg-template] xl:[--template:--xl-template] 2xl:[--template:--2xl-template]', className)}
      style={{
        '--default-template': '',
        '--sm-template': 'var(--default-template)',
        '--md-template': 'var(--sm-template)',
        '--lg-template': 'var(--md-template)',
        '--xl-template': 'var(--lg-template)',
        '--2xl-template': 'var(--xl-template)',
        ...style
      }}
      {...props}
    />
  );
};

export default BentoGrid;
