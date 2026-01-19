import { ScrollAnimate, Title } from '@/components/atoms';
import HorizontalScroll, {
  HorizontalScrollProps
} from '@/components/atoms/HorizontalScroll';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';

const CLIP_PATHS = {
  rtl: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
  ltr: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
};

const ANIMATION_CONFIG = (
  dir: keyof typeof CLIP_PATHS
): ScrollAnimateConfigOptions => ({
  scrollConfig: {
    offset: ['0 1', '0 .6']
  },
  prop: 'clipPath',
  propPoints: CLIP_PATHS[dir]
});

type ListHorizontalScrollItemMoleculeOwnProps = {
  baseVelocity?: HorizontalScrollProps['baseVelocity'];
};

type ListHorizontalScrollItemMoleculeProps =
  ListHorizontalScrollItemMoleculeOwnProps &
    Omit<TitleProps, keyof ListHorizontalScrollItemMoleculeOwnProps>;

const ListHorizontalScrollItemMolecule = ({
  className,
  baseVelocity = 1,
  children,
  ...props
}: ListHorizontalScrollItemMoleculeProps) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG(baseVelocity >= 0 ? 'ltr' : 'rtl')}>
      <Title
        className={cn(
          `bg-body py-md border-x-0 border-y odd:-rotate-[.5deg] even:rotate-[.5deg]`,
          className
        )}
        component='li'
        {...props}
      >
        <HorizontalScroll baseVelocity={baseVelocity}>
          {children}
        </HorizontalScroll>
      </Title>
    </ScrollAnimate>
  );
};

export default ListHorizontalScrollItemMolecule;
export type { ListHorizontalScrollItemMoleculeProps };
