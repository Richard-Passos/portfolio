import ScrollAnimate, {
  ScrollAnimateConfigOptions
} from '@/components/atoms/ScrollAnimate';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';
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

type ImagesBlockOrganismOwnProps = {
  data: {
    items: [
      ImagesBlockImageProps['data'],
      ImagesBlockImageProps['data'],
      ImagesBlockImageProps['data']
    ];
  };
};

type ImagesBlockOrganismProps = ImagesBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ImagesBlockOrganismOwnProps>;

const ImagesBlockOrganism = ({
  className,
  data,
  ...props
}: ImagesBlockOrganismProps) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.x}>
      <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
        <CleanLayoutBlock
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
        </CleanLayoutBlock>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default ImagesBlockOrganism;
export type { ImagesBlockOrganismProps };
