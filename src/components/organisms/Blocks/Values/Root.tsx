import { ComponentProps } from 'react';

import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import ValueCard from '@/components/organisms/Cards/Value';
import SecondaryLayouts, {
  SecondaryLayoutsProps
} from '@/components/organisms/Layouts/Secondary';
import { Value } from '@/types';
import { cn, entries } from '@/utils';

import Icons, { IconsProps } from '../../Icons';

type ValuesBlockOwnProps = {
  data: SecondaryLayoutsProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: Record<string, Value>;
    icons: {
      left: IconsProps['left'];
      right: IconsProps['right'];
    };
  };
  wrapperProps?: Partial<ComponentProps<'div'>>;
  gridProps?: Partial<BentoGridRootProps>;
  iconsProps?: Partial<IconsProps>;
};

type ValuesBlockProps = ValuesBlockOwnProps &
  Omit<SecondaryLayoutsProps, keyof ValuesBlockOwnProps>;

const ValuesBlock = ({
  data,
  wrapperProps,
  gridProps,
  iconsProps,
  ...props
}: ValuesBlockProps) => {
  return (
    <SecondaryLayouts
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
            'w-9by10 relative z-10 max-w-7xl gap-2.5',
            gridProps?.className
          )}
        >
          {entries(data.items).map(([key, data], i) => (
            <BentoGrid.Item
              index={i}
              key={key}
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
    </SecondaryLayouts>
  );
};

export default ValuesBlock;
export type { ValuesBlockProps };
