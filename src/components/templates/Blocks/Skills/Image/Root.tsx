import { ComponentProps } from 'react';

import { Image, ScrollAnimate } from '@/components/atoms';
import { ImageProps } from '@/components/atoms/Image';
import { cn } from '@/utils';

type SkillsBlockTemplateImageOrganismOwnProps = {
  data: {
    image: Pick<ImageProps, 'src' | 'alt'>;
  };
  wrapperProps?: Partial<ComponentProps<'div'>>;
  imageProps?: Partial<ImageProps>;
};

type SkillsBlockTemplateImageOrganismProps =
  SkillsBlockTemplateImageOrganismOwnProps &
    Omit<ComponentProps<'div'>, keyof SkillsBlockTemplateImageOrganismOwnProps>;

const SkillsBlockTemplateImageOrganism = ({
  className,
  data,
  wrapperProps,
  imageProps,
  ...props
}: SkillsBlockTemplateImageOrganismProps) => {
  return (
    <div
      className={cn(
        `aspect-4/5 rounded-(--radius) border p-(--p) [--p:--spacing(2.5)] [--radius:var(--radius-xl)]`,
        className
      )}
      {...props}
    >
      <div
        {...wrapperProps}
        className={cn(
          `bg-gray-1 dark:bg-dark-6 relative size-full overflow-hidden rounded-[calc(var(--radius)-var(--p))]`,
          wrapperProps?.className
        )}
      >
        <ScrollAnimate config={{ prop: 'y', propPoints: ['-13%', '0%'] }}>
          <div className='absolute h-[115%] w-full'>
            <Image
              alt={data.image.alt}
              fill
              quality={100}
              sizes='33vw'
              src={data.image.src}
              {...imageProps}
              className={cn('object-cover', imageProps?.className)}
            />
          </div>
        </ScrollAnimate>
      </div>
    </div>
  );
};

export default SkillsBlockTemplateImageOrganism;
export type { SkillsBlockTemplateImageOrganismProps };
