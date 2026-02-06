import { ComponentType } from 'react';

import Cards from '@/components/Cards';
import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/Layouts/Primary';
import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import { TypeVariants } from '@/types';

type BentoGridBlockOwnProps = {
  data: PrimaryLayoutsProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: TypeVariants<Omit<typeof Cards, 'Project'>>[];
  };
  hasAnimation?: boolean;
};

type BentoGridBlockProps = BentoGridBlockOwnProps &
  Omit<PrimaryLayoutsProps, keyof BentoGridBlockOwnProps | 'data'>;

const BentoGridBlock = ({
  data,
  hasAnimation,
  ...props
}: BentoGridBlockProps) => {
  return (
    <PrimaryLayouts
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
        {data.items.map(({ type, id, ...props }, i) => {
          const Card = Cards[type] as ComponentType<any>;

          const Item = (
            <BentoGrid.Item
              index={i}
              {...(!hasAnimation && { key: id })}
            >
              <Card {...props} />
            </BentoGrid.Item>
          );

          if (hasAnimation)
            return (
              <BentoGrid.ScrollAnimate key={id}>{Item}</BentoGrid.ScrollAnimate>
            );

          return Item;
        })}
      </BentoGrid.Root>
    </PrimaryLayouts>
  );
};

export default BentoGridBlock;
export type { BentoGridBlockProps };
