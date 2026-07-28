import { notFound } from 'next/navigation';
import { AdjacentProjects } from '@/components/layout/Blocks/AdjacentProjects';
import { ProjectHero } from '@/components/layout/Heros/Project';
import { NextPageIntlayer } from 'next-intlayer';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IntlayerServerProvider, useIntlayer } from 'next-intlayer/server';

const ProjectContent = ({ id }: { id: string }) => {
  const projects = useIntlayer('projects');
  const project = projects.find((p) => p.id == id);

  if (!project) notFound();

  const prev = projects.find((p) => p.id == project.prev)!;
  const next = projects.find((p) => p.id == project.next)!;

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

const ProjectPage: NextPageIntlayer<{ id: string }> = async ({ params }) => {
  const { locale, id } = await params;

  return (
    <>
      <IntlayerServerProvider locale={locale}>
        <Header />

        <main className='z-10 flex w-full max-w-bounds grow flex-col items-center justify-center'>
          <ProjectContent id={id} />
        </main>

        <Footer />
      </IntlayerServerProvider>
    </>
  );
};

export default ProjectPage;
