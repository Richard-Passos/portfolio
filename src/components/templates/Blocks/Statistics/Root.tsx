import { StatisticCard } from '@/components/Cards';
import { StatisticCardProps } from '@/components/Cards/Statistic';
import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/Layouts/Primary';
import { ScrollAnimate, Title } from '@/components/atoms';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

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

type StatisticsBlockTemplateOwnProps = {
  data: PrimaryLayoutsProps['data'] & {
    subtitle?: Node[];
    items: StatisticCardProps['data'][];
  };
};

type StatisticsBlockTemplateProps = StatisticsBlockTemplateOwnProps &
  Omit<PrimaryLayoutsProps, keyof StatisticsBlockTemplateOwnProps>;

const StatisticsBlockTemplate = ({
  data,
  ...props
}: StatisticsBlockTemplateProps) => {
  return (
    <PrimaryLayouts
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <div className='flex w-full flex-col items-center overflow-x-clip'>
        <section className='w-9by10 flex max-w-5xl flex-col items-center'>
          {renderComp(
            <Title
              className='text-dimmed *:text-text mr-auto mb-4 uppercase'
              component='h3'
              order={6}
            >
              {serialize(data.subtitle)}
            </Title>,
            [data.subtitle]
          )}

          <ul className='m-0 grid w-full list-none gap-3 p-0 sm:grid-cols-2'>
            {data.items.map((data) => (
              <ScrollAnimate
                config={ANIMATION_CONFIG.opacity}
                key={data.slug}
              >
                <ScrollAnimate config={ANIMATION_CONFIG.x}>
                  <li className='md:not-las-16en:-mb-16 h-fit translate-x-(--x) even:-translate-x-(--x) md:even:mt-16'>
                    <StatisticCard data={data} />
                  </li>
                </ScrollAnimate>
              </ScrollAnimate>
            ))}
          </ul>
        </section>
      </div>
    </PrimaryLayouts>
  );
};

export default StatisticsBlockTemplate;
export type { StatisticsBlockTemplateProps };
