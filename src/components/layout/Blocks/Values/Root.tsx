import { ComponentProps } from 'react';

import { BentoGridRootProps } from '@/components/display/BentoGrid';
import SecondaryLayout, {
  SecondaryLayoutProps
} from '@/components/layout/wrappers/Secondary';
import { BentoGrid } from '@/components/molecules';
import ValueCard from '@/components/organisms/Cards/Value';
import { Value } from '@/types';
import { MergeProps } from '@/types';
import { cn, entries } from '@/utils';

import Icons, { IconsProps } from '../../../misc/IconsPair';

type ValuesBlockOwnProps = {
  data: SecondaryLayoutProps['data'] & {
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

type ValuesBlockProps = MergeProps<ValuesBlockOwnProps, SecondaryLayoutProps>;

const ValuesBlock = ({
  data,
  wrapperProps,
  gridProps,
  iconsProps,
  ...props
}: ValuesBlockProps) => {
  return (
    <SecondaryLayout
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
    </SecondaryLayout>
  );
};

export { ValuesBlock };
export type { ValuesBlockProps };
