import { ComponentType } from 'react';

import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import Cards from '@/components/organisms/Cards';
import { TypeVariants } from '@/types';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';

type BentoGridBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: TypeVariants<Omit<typeof Cards, 'Project'>>[];
  };
  hasAnimation?: boolean;
};

type BentoGridBlockOrganismProps = BentoGridBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof BentoGridBlockOrganismOwnProps | 'data'>;

const BentoGridBlockOrganism = ({
  data,
  hasAnimation,
  ...props
}: BentoGridBlockOrganismProps) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <BentoGrid.Root
        className='w-9by10 max-w-screen-lg'
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
    </PrimaryLayoutBlock>
  );
};

export default BentoGridBlockOrganism;
export type { BentoGridBlockOrganismProps };
