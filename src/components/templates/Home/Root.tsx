import { Mission, MissionProps } from '@/components/layout/Blocks/Mission';
import { PrimaryHero, PrimaryHeroProps } from '@/components/layout/Heros/Primary';
import { Career, CareerProps } from '@/components/layout/Blocks/Career';
import { Projects, ProjectsProps } from '@/components/layout/Blocks/Projects';
import { But, ButProps } from '@/components/layout/Blocks/But';
import { About, AboutProps } from '@/components/layout/Blocks/About';

export type HomeTemplateProps = {
  data: {
    hero: PrimaryHeroProps['data'];
    mission: MissionProps['data'];
    career: CareerProps['data'];
    projects: ProjectsProps['data'];
    but: ButProps['data'];
    about: AboutProps['data'];
  };
};

export const HomeTemplate = ({ data }: HomeTemplateProps) => {
  return (
    <>
      <About
        theme='dark'
        data={data.about}
      />

      <About
        theme='light'
        data={data.about}
      />

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
        className='rounded-b-4xl'
      />

      <But
        theme='light'
        data={data.but}
      />

      <But
        theme='dark'
        data={data.but}
        className='rounded-t-4xl'
      />

      <About
        theme='dark'
        data={data.about}
      />

      <About
        theme='light'
        data={data.about}
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
