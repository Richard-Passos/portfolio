import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const Root = ({ asChild, variant, className, ...props }) => {
  const Tag = asChild ? Slot : 'button';

  const variantClassName = getVariant(variant);

  return (
    <Tag
      className={cn(
        'items-cente tracking-md flex h-12 min-w-[theme(spacing.12)] cursor-pointer justify-center gap-2 font-bold uppercase',
        variantClassName,
        className,
      )}
      {...props}
    />
  );
};

const getVariant = (variant) => {
  const variants = {
    default: 'text-current hover:text-gray-tertiary',
    neutral: 'bg-neutral text-neutral-content hover:bg-gray-secondary',
  };

  return variants[variant] || variants.default;
};

export default Root;
