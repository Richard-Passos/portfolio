import { ScrollAnimate, Title } from '@/components/atoms';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { StatisticCard } from '@/components/organisms/Cards';
import { StatisticCardProps } from '@/components/organisms/Cards/Statistic';
import { renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';

const SCROLL_OFFSET = ['0 1', '0 .55'],
  ANIMATION_CONFIG = {
    opacity: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: 'opacity',
      propPoints: [0, 1]
    } as ScrollAnimateConfigOptions,
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--x',
      propPoints: ['-25%', '0%']
    } as ScrollAnimateConfigOptions
  };

type StatisticsBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    subtitle?: Node[];
    items: StatisticCardProps['data'][];
  };
};

type StatisticsBlockOrganismProps = StatisticsBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof StatisticsBlockOrganismOwnProps>;

const StatisticsBlockOrganism = ({
  data,
  ...props
}: StatisticsBlockOrganismProps) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <div className='flex w-full flex-col items-center overflow-x-clip'>
        <section className='w-9by10 flex max-w-screen-lg flex-col items-center'>
          {renderComp(
            <Title
              className={`mb-md text-dimmed *:text-text mr-auto uppercase`}
              component='h3'
              order={6}
            >
              {serialize(data.subtitle)}
            </Title>,
            [data.subtitle]
          )}

          <ul className={`gap-sm m-0 grid w-full list-none p-0 sm:grid-cols-2`}>
            {data.items.map((data) => (
              <ScrollAnimate
                config={ANIMATION_CONFIG.opacity}
                key={data.slug}
              >
                <ScrollAnimate config={ANIMATION_CONFIG.x}>
                  <li
                    className={`md:even:mt-2xl md:[&:not(:last-child)]:even:-mb-2xl h-fit translate-x-(--x) even:-translate-x-(--x)`}
                  >
                    <StatisticCard data={data} />
                  </li>
                </ScrollAnimate>
              </ScrollAnimate>
            ))}
          </ul>
        </section>
      </div>
    </PrimaryLayoutBlock>
  );
};

export default StatisticsBlockOrganism;
export type { StatisticsBlockOrganismProps };
