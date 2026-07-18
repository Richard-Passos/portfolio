import { Image, ImageProps } from '@/components/display/Image';
import { ImageReview } from '@/components/display/Image/Review';
import { Link, LinkProps } from '@/components/navigation/Link';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type ProjectCardImageProps = MergeProps<Pick<ImageProps, 'src'>, LinkProps>;

export const ProjectCardImage = ({ src, className, ...props }: ProjectCardImageProps) => {
  return (
    <Link
      tabIndex={-1}
      className={cn('block aspect-square w-full', className)}
      {...props}
    >
      <ImageReview className='size-full'>
        <Image
          role='presentation'
          src={src}
          alt=''
          width={320}
          height={320}
          className='size-full object-cover'
        />
      </ImageReview>
    </Link>
  );
};
