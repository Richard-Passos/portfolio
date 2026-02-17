import { Card } from '@/components/atoms';
import { Catalog } from '@/components/molecules';
import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/organisms/Layouts/Primary';
import { Project } from '@/types';
import { renderComp, serialize } from '@/utils';
import { Node } from '@/utils/serialize';

import ProjectsCatalogGridBlock from './Grid';
import ProjectsCatalogTableBlock from './Table';

type ProjectsCatalogBlockOwnProps = {
  data: PrimaryLayoutsProps['data'] & {
    empty: Node[];
    items: Record<string, Project>;
  };
};

type ProjectsCatalogBlockProps = ProjectsCatalogBlockOwnProps &
  Omit<PrimaryLayoutsProps, keyof ProjectsCatalogBlockOwnProps>;

const ProjectsCatalogBlock = ({
  data,
  ...props
}: ProjectsCatalogBlockProps) => {
  return (
    <PrimaryLayouts
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
    </PrimaryLayouts>
  );
};

export default ProjectsCatalogBlock;
export type { ProjectsCatalogBlockProps };
