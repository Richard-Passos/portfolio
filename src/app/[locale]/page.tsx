import data from './page.d';

import { Mission, MissionProps } from '@/components/layout/Blocks/Mission';
import { PrimaryHero, PrimaryHeroProps } from '@/components/layout/Heros/Primary';
import { Career, CareerProps } from '@/components/layout/Blocks/Career';
import { Projects, ProjectsProps } from '@/components/layout/Blocks/Projects';
import { But, ButProps } from '@/components/layout/Blocks/But';
import { About, AboutProps } from '@/components/layout/Blocks/About';
import { Cta, CtaProps } from '@/components/layout/Blocks/Cta';
import { Skills, SkillsProps } from '@/components/layout/Blocks/Skills';
import { IntlayerServerProvider, useIntlayer } from 'next-intlayer/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NextPageIntlayer } from 'next-intlayer';
import SKILLSMeta from '@/common/SKILLS.meta';

export type HomeData = {
  hero: PrimaryHeroProps['data'];
  mission: MissionProps['data'];
  career: CareerProps['data'];
  experience: CtaProps['data'];
  projects: ProjectsProps['data'];
  but: ButProps['data'];
  about: AboutProps['data'];
  skills: SkillsProps['data'];
  cta: CtaProps['data'];
};

const HomeContent = () => {
  const t = useIntlayer('skills');
  const skills = t.map((s) => ({
    ...s,
    ...(SKILLSMeta[s.id as keyof typeof SKILLSMeta] ?? {})
  }));

  return (
    <>
      <PrimaryHero
        theme='light'
        data={data.hero}
      />

      <Mission
        theme='dark'
        data={data.mission}
      />

      <Career
        theme='dark'
        data={data.career}
        className='pb-[calc(var(--py)*2)]'
      />

      <Cta
        theme='dark'
        data={data.experience}
      />

      <Projects
        theme='dark'
        data={data.projects}
        className='py-[calc(var(--py)*2)]'
      />

      <But
        theme='light'
        data={data.but}
      />

      <About
        theme='dark'
        data={data.about}
        className='pb-[calc(var(--py)*2)]'
      />

      <Skills
        theme='dark'
        data={{ ...data.skills, items: skills }}
        className='pb-[calc(var(--py)*2)]'
      />

      <Cta
        theme='dark'
        data={data.cta}
      />
    </>
  );
};

const HomePage: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <>
      <IntlayerServerProvider locale={locale}>
        <Header />

        <main className='z-10 flex w-full max-w-bounds grow flex-col items-center justify-center'>
          <HomeContent />
        </main>

        <Footer />
      </IntlayerServerProvider>
    </>
  );
};

export default HomePage;
