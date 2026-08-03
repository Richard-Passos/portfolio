import { notFound } from 'next/navigation';
import AdjacentProjects from '@/components/layout/Blocks/AdjacentProjects';
import { ProjectHero } from '@/components/layout/Heros/Project';
import { IntlayerClientProvider, NextPageIntlayer } from 'next-intlayer';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IntlayerServerProvider, useIntlayer } from 'next-intlayer/server';

const ProjectContent = ({ id }: { id: string }) => {
  const projects = useIntlayer('projects');
  const project = projects.find((p) => p.id == id);

  if (!project) notFound();

  const prev = projects.find((p) => p.id.value == project.prev.value)!;
  const next = projects.find((p) => p.id.value == project.next.value)!;

  return (
    <>
      <ProjectHero
        theme='dark'
        data={{
          ...project,
          thumbnail: project.thumbnail.value,
          images: project.images?.map((el) => el.value) ?? []
        }}
      />

      <AdjacentProjects theme='dark'>
        <AdjacentProjects.Prev
          project={{
            ...prev,
            thumbnail: prev.thumbnail.value,
            images: prev.images?.map((el) => el.value) ?? []
          }}
        />

        <AdjacentProjects.Next
          project={{
            ...next,
            thumbnail: next.thumbnail.value,
            images: next.images?.map((el) => el.value) ?? []
          }}
        />
      </AdjacentProjects>
    </>
  );
};

const ProjectPage: NextPageIntlayer<{ id: string }> = async ({ params }) => {
  const { locale, id } = await params;

  return (
    <IntlayerClientProvider locale={locale}>
      <IntlayerServerProvider locale={locale}>
        <Header />

        <main className='z-10 flex w-full max-w-bounds grow flex-col items-center justify-center'>
          <ProjectContent id={id} />
        </main>

        <Footer />
      </IntlayerServerProvider>
    </IntlayerClientProvider>
  );
};

export default ProjectPage;
