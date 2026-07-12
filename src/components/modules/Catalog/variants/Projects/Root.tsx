import ProjectCard from '@/components/display/Cards/Project';
import data from './.data';

import Catalog, { CatalogProps } from '@/components/modules/Catalog';
import { Project } from '@/types/Project';
import { cn } from '@/utils/cn';

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
        <ProjectCard.Gallery>
          {data.items.map((el, i) => (
            <ProjectCard key={el.id}>
              <ProjectCard.Badge index={i} />

              <ProjectCard.Image
                src={el.thumbnail}
                href={`/projects/${el.id}`}
              />

              <ProjectCard.Header>
                <div>
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
        </ProjectCard.Gallery>
      </Catalog.List>
    </Catalog>
  );
};
