import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

const SocialNavTitle = ({ className, asChild, children, ...props }) => {
  const Tag = asChild ? Slot : 'h3';

  return (
    <Tag
      className={twMerge(
        'flex items-end justify-center gap-2 font-bold opacity-10',
        className,
      )}
      {...props}
    >
      <span className='h-px w-[10%] bg-current' />

      <span>{children}</span>

      <span className='h-px w-[10%] bg-current' />
    </Tag>
  );
};

export default SocialNavTitle;
