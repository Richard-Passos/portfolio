import { Image, ImageProps } from '@/components/display/Image';
import { ImageReview } from '@/components/display/Image/Review';
import { Link, LinkProps } from '@/components/navigation/Link';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { useIntlayer } from 'next-intlayer/server';

export type ProjectCardImageProps = MergeProps<Pick<ImageProps, 'src'>, LinkProps>;

export const ProjectCardImage = ({ src, className, ...props }: ProjectCardImageProps) => {
  const t = useIntlayer('project-card');

  return (
    <Link
      aria-label={t.open.value}
      tabIndex={-1}
      className={cn('block aspect-square w-full', className)}
      {...props}
    >
      <ImageReview className='size-full'>
        <Image
          alt=''
          src={src}
          width={320}
          height={320}
          role='presentation'
          className='size-full object-cover'
        />
      </ImageReview>
    </Link>
  );
};
