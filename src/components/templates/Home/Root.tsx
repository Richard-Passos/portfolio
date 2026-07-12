import { Mission, MissionProps } from '@/components/layout/Blocks/Mission';
import { PrimaryHero, PrimaryHeroProps } from '@/components/layout/Heros/Primary';
import { Career, CareerProps } from '@/components/layout/Blocks/Career';
import { Projects, ProjectsProps } from '@/components/layout/Blocks/Projects';

export type HomeTemplateProps = {
  data: {
    hero: PrimaryHeroProps['data'];
    mission: MissionProps['data'];
    career: CareerProps['data'];
    projects: ProjectsProps['data'];
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
      />

      <Projects
        theme='dark'
        data={data.projects}
      />

      <Mission
        theme='light'
        data={data.mission}
      />

      <Career
        theme='light'
        data={data.career}
      />

      <Projects
        theme='light'
        data={data.projects}
      />
    </>
  );
};
