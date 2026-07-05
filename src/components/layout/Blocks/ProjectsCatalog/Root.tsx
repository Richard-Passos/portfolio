import { Card } from '@/components/atoms';
import PrimaryLayout, {
  PrimaryLayoutProps
} from '@/components/layout/wrappers/Primary';
import { Catalog } from '@/components/molecules';
import { Project } from '@/types';
import { MergeProps } from '@/types';
import { renderComp, serialize } from '@/utils';
import { Node } from '@/utils/serialize';

import ProjectsCatalogGridBlock from './Grid';
import ProjectsCatalogTableBlock from './Table';

type ProjectsCatalogBlockOwnProps = {
  data: PrimaryLayoutProps['data'] & {
    empty: Node[];
    items: Record<string, Project>;
  };
};

type ProjectsCatalogBlockProps = MergeProps<
  ProjectsCatalogBlockOwnProps,
  PrimaryLayoutProps
>;

const ProjectsCatalogBlock = ({
  data,
  ...props
}: ProjectsCatalogBlockProps) => {
  return (
    <PrimaryLayout
      data={{
        title: data.title
      }}
      {...props}
    >
      <Catalog.Root
        className='w-9by10 flex max-w-7xl gap-4 max-md:flex-col md:justify-end'
        items={data.items}
      >
        {renderComp(
          <section className='w-full max-w-48 md:max-w-36'>
            {serialize(data.description ?? [], {
              paragraph: {
                className: 'text-dimmed *:text-text'
              }
            })}
          </section>,
          [!!data.description?.length]
        )}

        <div className='flex max-w-4xl grow flex-col items-center'>
          <Catalog.Empty className='flex w-full'>
            <Card.Root className='min-h-52 items-center justify-center text-center'>
              {serialize(data.empty)}
            </Card.Root>
          </Catalog.Empty>

          <ProjectsCatalogTableBlock className='relative z-20 w-full max-sm:hidden' />

          <ProjectsCatalogGridBlock className='ml-auto w-full sm:hidden' />
        </div>
      </Catalog.Root>
    </PrimaryLayout>
  );
};

export { ProjectsCatalogBlock };
export type { ProjectsCatalogBlockProps };
