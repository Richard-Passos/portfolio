import Sections from './sections';
import Texts from './texts';

const HomeView = () => {
  return (
    <main className='mx-auto max-w-bounds'>
      <Sections.Hero theme='light' />

      <Texts.First
        id='scroll-down-to'
        theme='light'
      />

      <Sections.Work theme='dark' />

      <Texts.Second theme='light' />

      <Sections.About theme='dark' />

      <Texts.Third />
    </main>
  );
};

export default HomeView;
