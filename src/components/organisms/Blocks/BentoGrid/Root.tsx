import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/organisms/Layouts/Primary';
import { TypeVariants } from '@/types';
import { entries } from '@/utils';
import { TCards } from '@/utils/getCard';

import { RenderCard } from '../../Render';

type BentoGridBlockOwnProps = {
  data: PrimaryLayoutsProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: Record<string, TypeVariants<TCards>>;
  };
};

type BentoGridBlockProps = BentoGridBlockOwnProps &
  Omit<PrimaryLayoutsProps, keyof BentoGridBlockOwnProps | 'data'>;

const BentoGridBlock = ({ data, ...props }: BentoGridBlockProps) => {
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
        {entries(data.items).map(([key, props], i) => (
          <BentoGrid.ScrollAnimate key={key}>
            <BentoGrid.Item index={i}>
              <RenderCard {...props} />
            </BentoGrid.Item>
          </BentoGrid.ScrollAnimate>
        ))}
      </BentoGrid.Root>
    </PrimaryLayouts>
  );
};

export default BentoGridBlock;
export type { BentoGridBlockProps };
