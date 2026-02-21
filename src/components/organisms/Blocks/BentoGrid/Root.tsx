import { BentoGrid } from '@/components/molecules';
import { BentoGridRootProps } from '@/components/molecules/BentoGrid';
import PrimaryLayout, {
  PrimaryLayoutProps
} from '@/components/organisms/Layouts/Primary';
import { TypeVariants } from '@/types';
import { entries } from '@/utils';
import { TCards } from '@/utils/getCard';

import { RenderCard } from '../../Render';

type BentoGridBlockOwnProps = {
  data: PrimaryLayoutProps['data'] & {
    templates: BentoGridRootProps['templates'];
    items: Record<string, TypeVariants<TCards>>;
  };
};

type BentoGridBlockProps = BentoGridBlockOwnProps &
  Omit<PrimaryLayoutProps, keyof BentoGridBlockOwnProps | 'data'>;

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

export default BentoGridBlock;
export type { BentoGridBlockProps };
