import Mission from '@/components/layout/Blocks/Mission';
import PrimaryHero from '@/components/layout/Heros/Primary';
import Career from '@/components/layout/Blocks/Career';
import Projects from '@/components/layout/Blocks/Projects';
import But from '@/components/layout/Blocks/But';
import About from '@/components/layout/Blocks/About';
import Cta from '@/components/layout/Blocks/Cta';
import Skills from '@/components/layout/Blocks/Skills';
import { IntlayerServerProvider, useIntlayer } from 'next-intlayer/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { IntlayerClientProvider, NextPageIntlayer } from 'next-intlayer';
import SKILLSMeta from '@/common/SKILLS.meta';
import { ReactNode } from 'react';
import { BoltIcon } from '@/components/system/Icon/Bolt';
import { SmileIcon } from '@/components/system/Icon/Smile';
import { CapIcon } from '@/components/system/Icon/Cap';
import { Skill } from '@/types/Skill';
import MISSIONMeta from '@/common/MISSION.meta';
import { RocketIcon } from '@/components/system/Icon/Rocket';
import { GameControllerIcon } from '@/components/system/Icon/GameController';
import { GlobeIcon } from '@/components/system/Icon/Globe';
import { TrophyIcon } from '@/components/system/Icon/Trophy';

export type HomeData = {
  hero: {
    title: ReactNode;
    left: { title: ReactNode; text: ReactNode };
    center: { title: ReactNode; text: ReactNode };
    right: { title: ReactNode; text: ReactNode };
  };
  mission: {
    items: { id: keyof typeof MISSIONMeta; text: ReactNode }[];
    text: ReactNode;
  };
  career: {
    title: ReactNode;
  };
  experience: {
    title: ReactNode;
    text: ReactNode;
  };
  projects: {
    title: ReactNode;
  };
  but: {
    title: ReactNode;
    text: ReactNode;
  };
  about: {
    title: ReactNode;
    about: {
      badge: ReactNode;
      text: ReactNode;
    };
    better: {
      text: ReactNode;
    };
    love: {
      text: ReactNode;
    };
    location: {
      title: ReactNode;
    };
    hobbies: {
      title: ReactNode;
      text: ReactNode;
    };
    gallery: {
      images: string[];
    };
  };
  skills: {
    title: ReactNode;
    skills: Pick<Skill, 'id' | 'title'>[];
  };
  cta: {
    title: ReactNode;
    text: ReactNode;
  };
};

const HomeContent = () => {
  const t = useIntlayer('home-page');
  const s = useIntlayer('skills');
  const location = useIntlayer('location');

  const mission = t.mission.items.map((m) => (
    <>
      {m.text} {MISSIONMeta[m.id.value]}
    </>
  ));

  const skills = s.map((s) => ({
    ...s,
    ...SKILLSMeta[s.id.value]
  }));

  return (
    <>
      <PrimaryHero theme='light'>
        <PrimaryHero.Title>{t.hero.title}</PrimaryHero.Title>

        <PrimaryHero.Cards>
          <PrimaryHero.Left
            icon={<BoltIcon />}
            {...t.hero.left}
          />

          <PrimaryHero.Center
            icon={<SmileIcon />}
            {...t.hero.center}
          />

          <PrimaryHero.Right
            icon={<CapIcon />}
            {...t.hero.right}
          />
        </PrimaryHero.Cards>
      </PrimaryHero>

      <Mission theme='dark'>
        <Mission.ScrollBands items={mission} />

        <Mission.Text>{t.mission.text}</Mission.Text>
      </Mission>

      <Career
        theme='dark'
        className='pb-[calc(var(--py)*2)]'
      >
        <Career.Title>{t.career.title}</Career.Title>

        <Career.Catalog />
      </Career>

      <Cta theme='dark'>
        <Cta.Title>{t.experience.title}</Cta.Title>

        <Cta.Text>{t.experience.text}</Cta.Text>
      </Cta>

      <Projects
        theme='dark'
        className='py-[calc(var(--py)*2)]'
      >
        <Projects.Title>{t.projects.title}</Projects.Title>

        <Projects.Catalog />
      </Projects>

      <But theme='light'>
        <But.Title>{t.but.title}</But.Title>

        <But.Text>{t.but.text}</But.Text>
      </But>

      <About
        theme='dark'
        className='pb-[calc(var(--py)*2)]'
      >
        <About.Title>{t.about.title}</About.Title>

        <About.BentoGrid>
          <About.About {...t.about.about} />
          <About.Better
            icon={<RocketIcon />}
            {...t.about.better}
          />
          <About.Love
            icon={<GameControllerIcon />}
            {...t.about.love}
          />
          <About.Location
            icon={<GlobeIcon />}
            title={t.about.location.title({
              country: location.country,
              gmt: location.gmt
            })}
          />
          <About.Hobbies
            icon={<TrophyIcon />}
            {...t.about.hobbies}
          />
          <About.Gallery images={t.about.gallery.images.map((img) => img.value)} />
        </About.BentoGrid>
      </About>

      <Skills
        theme='dark'
        className='pb-[calc(var(--py)*2)]'
      >
        <Skills.Title>{t.skills.title}</Skills.Title>

        <Skills.Items items={skills} />
      </Skills>

      <Cta theme='dark'>
        <Cta.Title>{t.cta.title}</Cta.Title>

        <Cta.Text>{t.cta.text}</Cta.Text>
      </Cta>
    </>
  );
};

const HomePage: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerClientProvider locale={locale}>
      <IntlayerServerProvider locale={locale}>
        <Header />

        <main className='z-10 flex w-full max-w-bounds grow flex-col items-center justify-center'>
          <HomeContent />
        </main>

        <Footer />
      </IntlayerServerProvider>
    </IntlayerClientProvider>
  );
};

export default HomePage;
