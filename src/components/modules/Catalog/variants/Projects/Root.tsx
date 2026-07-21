import ProjectCard from '@/components/display/Card/Project';
import data from './.data';

import Catalog, { CatalogProps } from '@/components/modules/Catalog';
import { Project } from '@/types/Project';
import { cn } from '@/utils/cn';
import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import { PlusIcon } from '@/components/system/Icon/Plus';

export type ProjectsCatalogProps = Omit<CatalogProps<Project>, 'items'>;

export const ProjectsCatalog = ({ className, ...props }: ProjectsCatalogProps) => {
  return (
    <Catalog
      className={cn('w-full', className)}
      items={data.items}
      {...props}
    >
      <Catalog.Empty className='flex w-full'>{data.empty}</Catalog.Empty>

      <Catalog.List asChild>
        <ProjectCard.Group>
          {data.items.map((el, i) => (
            <ProjectCard key={el.id}>
              <ProjectCard.Badge index={i} />

              <ProjectCard.Image
                src={el.thumbnail}
                href={`/projects/${el.id}`}
              />

              <ProjectCard.Header>
                <div className='overflow-hidden'>
                  <ProjectCard.Title>{el.title}</ProjectCard.Title>

                  <ProjectCard.Extra
                    year={el.year}
                    roles={el.roles}
                  />
                </div>

                <ProjectCard.Trigger href={`/projects/${el.id}`} />
              </ProjectCard.Header>
            </ProjectCard>
          ))}
        </ProjectCard.Group>
      </Catalog.List>
    </Catalog>
  );
};
