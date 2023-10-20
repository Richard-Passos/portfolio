import { cn, cnv } from '@/utils';

const Badge = ({ variants, className, ...props }) => {
  return (
    <div
      aria-label='Badge'
      className={cn(badgeVariants(variants), className)}
      {...props}
    />
  );
};

const badgeVariants = cnv({
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  variants: {
    variant: {
      default:
        'border-transparent bg-primary text-primary-content hover:bg-primary/80',
      secondary:
        'border-transparent bg-secondary text-secondary-content hover:bg-secondary/80',
      destructive:
        'bg-destructive text-destructive-content hover:bg-destructive/80 border-transparent',
      outline: 'text-content',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default Badge;
export { badgeVariants };
