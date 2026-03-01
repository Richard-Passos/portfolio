import { BentoGrid } from '@/components/display';
import { BentoGridRootProps } from '@/components/display/BentoGrid';
import {
  PrimaryLayout,
  PrimaryLayoutProps
} from '@/components/layout/wrappers/Primary';
import { MergeProps, TypeVariants } from '@/types';
import { entries } from '@/utils';
import { TCards } from '@/utils/getCard';

type BentoGridBlockProps = MergeProps<
  {
    data: PrimaryLayoutProps['data'] & {
      templates: BentoGridRootProps['templates'];
      items: Record<string, TypeVariants<TCards>>;
    };
  },
  PrimaryLayoutProps,
  'data'
>;

const BentoGridBlock = ({ data, ...props }: BentoGridBlockProps) => {
  return (
    <PrimaryLayout
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <BentoGrid.Root
        className='w-9by10 max-w-5xl'
        templates={data.templates}
      >
        {entries(data.items).map(([key, props], i) => (
          <BentoGrid.ScrollAnimate key={key}>
            <BentoGrid.Item index={i}>
              <RenderCard {...props} />
            </BentoGrid.Item>
          </BentoGrid.ScrollAnimate>
        ))}
      </BentoGrid.Root>
    </PrimaryLayout>
  );
};

export { BentoGridBlock };
export type { BentoGridBlockProps };
