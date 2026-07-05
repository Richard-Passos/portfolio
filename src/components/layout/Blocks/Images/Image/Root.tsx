import { CardRoot, CardRootProps } from '@/components/display/Card';
import Image, { ImageProps } from '@/components/display/Image';
import ScrollAnimate from '@/components/motion/ScrollAnimate';
import { imageYScrollAnim } from '@/components/motion/ScrollAnimate/animations/scroll';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type ImagesBlockImageOwnProps = {
  data: Pick<ImageProps, 'src' | 'alt'>;
};

type ImagesBlockImageProps = MergeProps<
  ImagesBlockImageOwnProps,
  CardRootProps
>;

const ImagesBlockImage = ({
  className,
  data,
  ...props
}: ImagesBlockImageProps) => {
  return (
    <CardRoot
      className={cn(
        'aspect-4/5 h-auto overflow-visible bg-transparent',
        className
      )}
      padding='xs'
      radius='xl'
      {...props}
    >
      <div className='bg-gray-1 dark:bg-dark-6 relative size-full overflow-hidden rounded-[calc(var(--paper-radius)-var(--card-padding))] shadow-lg'>
        <ScrollAnimate config={imageYScrollAnim}>
          <div className='absolute h-[115%] w-full'>
            <Image
              alt={data.alt}
              className='object-cover'
              fill
              quality={100}
              sizes='100vw, (min-width: 640px) 50vw, (min-width: 768px) 33vw'
              src={data.src}
            />
          </div>
        </ScrollAnimate>
      </div>
    </CardRoot>
  );
};

export { ImagesBlockImage };
export type { ImagesBlockImageProps };
