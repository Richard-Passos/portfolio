import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/Layouts/Primary';
import { Card, Catalog } from '@/components/molecules';
import { Project } from '@/types';
import { renderComp, serialize } from '@/utils';
import { Node } from '@/utils/serialize';

import ProjectsCatalogGridBlockTemplate from './Grid';
import ProjectsCatalogTableBlockTemplate from './Table';

type ProjectsCatalogBlockTemplateOwnProps = {
  data: PrimaryLayoutsProps['data'] & {
    empty: Node[];
    items: Project[];
  };
};

type ProjectsCatalogBlockTemplateProps = ProjectsCatalogBlockTemplateOwnProps &
  Omit<PrimaryLayoutsProps, keyof ProjectsCatalogBlockTemplateOwnProps>;

const ProjectsCatalogBlockTemplate = ({
  data,
  ...props
}: ProjectsCatalogBlockTemplateProps) => {
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

          <ProjectsCatalogTableBlockTemplate className='relative z-20 w-full max-sm:hidden' />

          <ProjectsCatalogGridBlockTemplate className='ml-auto w-full sm:hidden' />
        </div>
      </Catalog.Root>
    </PrimaryLayouts>
  );
};

export default ProjectsCatalogBlockTemplate;
export type { ProjectsCatalogBlockTemplateProps };
