import ProjectCard from '@/components/display/Card/Project';

import Catalog, { CatalogProps } from '@/components/modules/Catalog';
import { cn } from '@/utils/cn';
import { useIntlayer } from 'next-intlayer/server';

export type ProjectsCatalogProps = CatalogProps;

export const ProjectsCatalog = ({ className, ...props }: ProjectsCatalogProps) => {
  const t = useIntlayer('projects-catalog');
  const isEmpty = t.items.length == 0;

  return (
    <Catalog
      className={cn('w-full', className)}
      {...props}
    >
      {isEmpty && (
        <Catalog.Empty className='flex min-h-32 w-full items-center justify-center border bg-body p-5 text-center'>
          {t.empty}
        </Catalog.Empty>
      )}
      {!isEmpty && (
        <Catalog.List asChild>
          <ProjectCard.Group>
            {t.items.map((el, i) => (
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
      )}{' '}
    </Catalog>
  );
};
