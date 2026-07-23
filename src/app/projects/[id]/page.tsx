import { PROJECTS } from '@/common/PROJECTS';
import { notFound } from 'next/navigation';
import { AdjacentProjects } from '@/components/layout/Blocks/AdjacentProjects';
import { ProjectHero } from '@/components/layout/Heros/Project';

export type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id == id);

  if (!project) notFound();

  const prev = PROJECTS.find((p) => p.id == project.prev)!;
  const next = PROJECTS.find((p) => p.id == project.next)!;

  return (
    <>
      <ProjectHero
        theme='dark'
        data={project}
      />

      <AdjacentProjects
        theme='dark'
        data={{ prev, next }}
      />
    </>
  );
};

export default ProjectPage;
