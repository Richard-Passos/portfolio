import { cn } from '@/utils/cn';
import { AnimateOnScroll, AnimateOnScrollConfig } from '@/components/motion/Animate';
import { MagneticLink, MagneticLinkProps } from '@/components/navigation/Link/Magnetic/Root';

export type ErrorHeroActionProps = MagneticLinkProps;

export const ErrorHeroActionAnim = {
  from: { x: '-50%', scale: 0.85 },
  to: { x: '0%', scale: 1 }
} satisfies AnimateOnScrollConfig;

export const ErrorHeroAction = ({ className, ...props }: ErrorHeroActionProps) => {
  return (
    <AnimateOnScroll config={ErrorHeroActionAnim}>
      <div className='absolute right-[5%] bottom-0 translate-y-1/2'>
        <MagneticLink
          color='primary'
          className={cn(
            'size-40 rounded-full border-border text-center sm:size-48 sm:text-xl',
            className
          )}
          {...props}
        />
      </div>
    </AnimateOnScroll>
  );
};
