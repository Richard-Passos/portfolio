import CleanLayout, {
  CleanLayoutProps
} from '@/components/layout/wrappers/Clean';
import ScrollAnimate, {
  ScrollAnimateConfigOptions
} from '@/components/motion/ScrollAnimate';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

import ImagesBlockImage, { ImagesBlockImageProps } from './Image';

const SCROLL_OFFSET = ['.5 1', '.5 .6'],
  ANIMATION_CONFIG = {
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--smooth-x',
      propPoints: [1, 0]
    } as ScrollAnimateConfigOptions,
    rotate: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--rotate',
      propPoints: ['15deg', '0deg']
    } as ScrollAnimateConfigOptions
  };

type ImagesBlockOwnProps = {
  data: {
    items: [
      ImagesBlockImageProps['data'],
      ImagesBlockImageProps['data'],
      ImagesBlockImageProps['data']
    ];
  };
};

type ImagesBlockProps = MergeProps<ImagesBlockOwnProps, CleanLayoutProps>;

const ImagesBlock = ({ className, data, ...props }: ImagesBlockProps) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.x}>
      <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
        <CleanLayout
          className={cn(
            `w-9by10 max-w-5xl gap-(--gap) pt-0 [--gap:--spacing(2.5)] sm:flex-row md:[--x:calc(var(--smooth-x)*(var(--gap)+35%))]`,
            className
          )}
          {...props}
        >
          <ImagesBlockImage
            className='mt-[7.5%] max-sm:hidden md:translate-x-(--x) md:-rotate-(--rotate)'
            data={data.items[0]}
          />

          <ImagesBlockImage
            className='z-10 mb-auto'
            data={data.items[1]}
          />

          <ImagesBlockImage
            className='mt-[7.5%] max-md:hidden md:-translate-x-(--x) md:rotate-(--rotate)'
            data={data.items[2]}
          />
        </CleanLayout>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export { ImagesBlock };
export type { ImagesBlockProps };
