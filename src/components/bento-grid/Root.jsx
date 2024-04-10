import { cn } from '@/utils';

const BentoGrid = ({ className, ...props }) => {
  return (
    <ul
      className={cn('grid gap-xs sm:grid-cols-2 lg:grid-cols-3 [grid-template-areas:var(--default-template)] sm:[grid-template-areas:var(--sm-template,var(--default-template))] md:[grid-template-areas:var(--md-template,var(--sm-template))] lg:[grid-template-areas:var(--lg-template,var(--md-template))] xl:[grid-template-areas:var(--xl-template,var(--lg-template))] 2xl:[grid-template-areas:var(--2xl-template,var(--lg-template))]', className)}
      {...props}
    />
  );
};

export default BentoGrid;
