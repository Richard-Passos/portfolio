import { Card, Catalog } from '@/components/molecules';
import { Project } from '@/types';
import { renderComp, serialize } from '@/utils';
import { Node } from '@/utils/serialize';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import ProjectsCatalogGridBlock from './Grid';
import ProjectsCatalogTableBlock from './Table';

type ProjectsCatalogBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    empty: Node[];
    items: Project[];
  };
};

type ProjectsCatalogBlockOrganismProps = ProjectsCatalogBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof ProjectsCatalogBlockOrganismOwnProps>;

const ProjectsCatalogBlockOrganism = ({
  data,
  ...props
}: ProjectsCatalogBlockOrganismProps) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title
      }}
      {...props}
    >
      <Catalog.Root
        className='w-9by10 flex max-w-7xl gap-4 max-md:flex-col md:justify-end'
        items={data.items}
      >
        <section className='w-full max-w-48 md:max-w-36'>
          {renderComp(
            serialize(data.description ?? [], {
              paragraph: {
                className: 'text-dimmed *:text-text'
              }
            }),
            [!!data.description?.length]
          )}
        </section>

        <div className='flex max-w-3xl grow flex-col items-center'>
          <Catalog.Empty className='flex w-full'>
            <Card.Root className='min-h-52 items-center justify-center text-center'>
              {serialize(data.empty)}
            </Card.Root>
          </Catalog.Empty>

          <ProjectsCatalogTableBlock className='relative z-20 w-full max-sm:hidden' />

          <ProjectsCatalogGridBlock className='ml-auto w-full sm:hidden' />
        </div>
      </Catalog.Root>
    </PrimaryLayoutBlock>
  );
};

export default ProjectsCatalogBlockOrganism;
export type { ProjectsCatalogBlockOrganismProps };
