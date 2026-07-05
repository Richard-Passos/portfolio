import { ScrollAnimate, Title } from '@/components/atoms';
import PrimaryLayout, {
  PrimaryLayoutProps
} from '@/components/layout/wrappers/Primary';
import { Action } from '@/components/molecules';
import { lineLeftScrollAnim } from '@/components/motion/ScrollAnimate/animations/scroll';
import { SkillCard } from '@/components/organisms/Cards';
import { Skill } from '@/types';
import { MergeProps } from '@/types';
import { entries, renderComp } from '@/utils';
import { Node, serialize } from '@/utils/serialize';

import SkillsBlockImage from './Image';
import { SkillsBlockImageProps } from './Image/Root';

type SkillsBlockOwnProps = {
  data: PrimaryLayoutProps['data'] &
    SkillsBlockImageProps['data'] & {
      items: Record<string, Record<string, Skill>>;
      action?: {
        label: Node[];
      };
    };
};

type SkillsBlockProps = MergeProps<SkillsBlockOwnProps, PrimaryLayoutProps>;

const SkillsBlock = ({ data, ...props }: SkillsBlockProps) => {
  return (
    <PrimaryLayout
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <section className='w-9by10 flex max-w-7xl items-start gap-4 lg:gap-10'>
        <SkillsBlockImage
          className='w-1/3 shrink-0 max-md:hidden'
          data={{
            image: data.image
          }}
        />

        <section className='flex max-w-2xl shrink flex-col gap-10 py-10'>
          {entries(data.items).map(([key, data]) => (
            <section key={key}>
              <div className='mb-5 flex items-center gap-2'>
                <span className='relative h-1 w-6 shrink-0'>
                  <ScrollAnimate
                    config={lineLeftScrollAnim}
                    layout
                  >
                    <span className='bg-body absolute inset-0 border' />
                  </ScrollAnimate>
                </span>

                <Title
                  order={6}
                  className='capitalize'
                >
                  {key}
                </Title>
              </div>

              <ul className='m-0 flex list-none flex-wrap gap-2.5 p-0'>
                {entries(data).map(([k, d]) => (
                  <li key={k}>
                    <SkillCard data={d} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>

        {renderComp(
          <Action
            as='link'
            className='mt-8'
            href='/contact'
            size='md'
            variant='default'
          >
            {serialize(data.action?.label)}
          </Action>,
          [data.action]
        )}
      </section>
    </PrimaryLayout>
  );
};

export { SkillsBlock };
export type { SkillsBlockProps };
