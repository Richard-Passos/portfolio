import { Mission, MissionProps } from '@/components/layout/Blocks/Mission';
import { PrimaryHero, PrimaryHeroProps } from '@/components/layout/Heros/Primary';
import { Career, CareerProps } from '@/components/layout/Blocks/Career';
import { Projects, ProjectsProps } from '@/components/layout/Blocks/Projects';
import { But, ButProps } from '@/components/layout/Blocks/But';
import { About, AboutProps } from '@/components/layout/Blocks/About';
import { Cta, CtaProps } from '@/components/layout/Blocks/Cta';
import { Skills, SkillsProps } from '@/components/layout/Blocks/Skills';

export type HomeTemplateProps = {
  data: {
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
};

export const HomeTemplate = ({ data }: HomeTemplateProps) => {
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
        className='rounded-b-4xl py-[calc(var(--py)*2)]'
      />

      <But
        theme='light'
        data={data.but}
      />

      <About
        theme='dark'
        data={data.about}
        className='rounded-t-4xl pb-[calc(var(--py)*2)]'
      />

      <Skills
        theme='dark'
        data={data.skills}
        className='pb-[calc(var(--py)*2)]'
      />

      <Cta
        theme='dark'
        data={data.cta}
      />
    </>
  );
};
