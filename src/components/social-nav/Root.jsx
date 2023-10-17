import { cn } from '@/utils';

import Animation from '../animation';

const SocialNav = ({ variants, className, ...props }) => {
  variants = variants || [
    {},
    {
      transition: {
        staggerChildren: 0.15,
      },
    },
  ];

  return (
    <Animation.InView
      as='nav'
      className={cn('flex gap-6', className)}
      variants={variants}
      {...props}
    />
  );
};
export default SocialNav;
