import { ComponentProps } from 'react';

import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import ValueCard, { ValueCardProps } from '@/components/organisms/Cards/Value';
import { cn } from '@/utils';

import Icons, { IconsProps } from '../../Icons';
import SecondaryLayoutBlock, {
  SecondaryLayoutBlockProps
} from '../Layout/Secondary';

type ValuesBlockOrganismOwnProps = {
  data: SecondaryLayoutBlockProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: ValueCardProps['data'][];
    icons: {
      left: IconsProps['left'];
      right: IconsProps['right'];
    };
  };
  wrapperProps?: Partial<ComponentProps<'div'>>;
  gridProps?: Partial<BentoGridRootProps>;
  iconsProps?: Partial<IconsProps>;
};

type ValuesBlockOrganismProps = ValuesBlockOrganismOwnProps &
  Omit<SecondaryLayoutBlockProps, keyof ValuesBlockOrganismOwnProps>;

const ValuesBlockOrganism = ({
  data,
  wrapperProps,
  gridProps,
  iconsProps,
  ...props
}: ValuesBlockOrganismProps) => {
  return (
    <SecondaryLayoutBlock
      data={{
        title: data.title
      }}
      {...props}
    >
      <div
        {...wrapperProps}
        className={cn(
          'relative flex w-full flex-col items-center',
          wrapperProps?.className
        )}
      >
        <BentoGrid.Root
          templates={data.templates}
          {...gridProps}
          className={cn(
            'gap-xs w-9by10 relative z-10 max-w-screen-xl',
            gridProps?.className
          )}
        >
          {data.items.map((data, i) => (
            <BentoGrid.Item
              index={i}
              key={data.slug}
            >
              <ValueCard data={data} />
            </BentoGrid.Item>
          ))}
        </BentoGrid.Root>

        <Icons
          left={data.icons.left}
          right={data.icons.right}
          {...iconsProps}
          className={cn('max-lg:hidden', iconsProps?.className)}
        />
      </div>
    </SecondaryLayoutBlock>
  );
};

export default ValuesBlockOrganism;
export type { ValuesBlockOrganismProps };
