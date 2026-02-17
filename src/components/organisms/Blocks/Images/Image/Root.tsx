import { imageYScrollAnim } from '@/animations/scroll';
import { CardRoot, CardRootProps } from '@/components/atoms/Card';
import Image, { ImageProps } from '@/components/atoms/Image';
import ScrollAnimate from '@/components/atoms/ScrollAnimate';
import { cn } from '@/utils';

type ImagesBlockImageOrganismOwnProps = {
  data: Pick<ImageProps, 'src' | 'alt'>;
};

type ImagesBlockImageOrganismProps = ImagesBlockImageOrganismOwnProps &
  Omit<CardRootProps, keyof ImagesBlockImageOrganismOwnProps>;

const ImagesBlockImageOrganism = ({
  className,
  data,
  ...props
}: ImagesBlockImageOrganismProps) => {
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

export default ImagesBlockImageOrganism;
export type { ImagesBlockImageOrganismProps };
