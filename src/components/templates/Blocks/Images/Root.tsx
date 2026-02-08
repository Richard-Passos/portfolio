import CleanLayouts, { CleanLayoutsProps } from '@/components/Layouts/Clean';
import ScrollAnimate, {
  ScrollAnimateConfigOptions
} from '@/components/atoms/ScrollAnimate';
import { cn } from '@/utils';

import ImagesBlockTemplateImage, {
  ImagesBlockTemplateImageProps
} from './Image';

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

type ImagesBlockTemplateOwnProps = {
  data: {
    items: [
      ImagesBlockTemplateImageProps['data'],
      ImagesBlockTemplateImageProps['data'],
      ImagesBlockTemplateImageProps['data']
    ];
  };
};

type ImagesBlockTemplateProps = ImagesBlockTemplateOwnProps &
  Omit<CleanLayoutsProps, keyof ImagesBlockTemplateOwnProps>;

const ImagesBlockTemplate = ({
  className,
  data,
  ...props
}: ImagesBlockTemplateProps) => {
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
          <ImagesBlockTemplateImage
            className='mt-[7.5%] max-sm:hidden md:translate-x-(--x) md:-rotate-(--rotate)'
            data={data.items[0]}
          />

          <ImagesBlockTemplateImage
            className='z-10'
            data={data.items[1]}
          />

          <ImagesBlockTemplateImage
            className='mt-[7.5%] max-md:hidden md:-translate-x-(--x) md:rotate-(--rotate)'
            data={data.items[2]}
          />
        </CleanLayouts>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default ImagesBlockTemplate;
export type { ImagesBlockTemplateProps };
