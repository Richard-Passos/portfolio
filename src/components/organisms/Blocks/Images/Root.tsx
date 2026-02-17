import ScrollAnimate, {
  ScrollAnimateConfigOptions
} from '@/components/atoms/ScrollAnimate';
import CleanLayouts, {
  CleanLayoutsProps
} from '@/components/organisms/Layouts/Clean';
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

type ImagesBlockProps = ImagesBlockOwnProps &
  Omit<CleanLayoutsProps, keyof ImagesBlockOwnProps>;

const ImagesBlock = ({ className, data, ...props }: ImagesBlockProps) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.x}>
      <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
        <CleanLayouts
          className={cn(
            `w-9by10 max-w-5xl gap-(--gap) pt-0 [--gap:--spacing(2.5)] sm:flex-row sm:items-start md:[--x:calc(var(--smooth-x)*(var(--gap)+35%))]`,
            className
          )}
          {...props}
        >
          <ImagesBlockImage
            className='mt-[7.5%] max-sm:hidden md:translate-x-(--x) md:-rotate-(--rotate)'
            data={data.items[0]}
          />

          <ImagesBlockImage
            className='z-10'
            data={data.items[1]}
          />

          <ImagesBlockImage
            className='mt-[7.5%] max-md:hidden md:-translate-x-(--x) md:rotate-(--rotate)'
            data={data.items[2]}
          />
        </CleanLayouts>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default ImagesBlock;
export type { ImagesBlockProps };
