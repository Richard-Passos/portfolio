import Sections from './sections';
import Texts from './texts';

const HomeView = async () => {
  return (
    <>
      <Sections.Hero theme='light' />

      <Sections.Work
        id='scrollTo'
        theme='dark'
      />

      <Texts.First theme='light' />

      <Sections.About theme='dark' />

      <Texts.Second theme='dark' />
    </>
  );
};

export default HomeView;
