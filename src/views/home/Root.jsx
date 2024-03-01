import Sections from './sections';
import Texts from './texts';

const HomeView = () => {
  return (
    <main className='w-full max-w-bounds'>
      <Sections.Hero theme='light' />

      <Sections.Work
        id='scrollTo'
        theme='dark'
      />

      <Texts.First theme='light' />

      <Sections.About theme='dark' />

      <Texts.Second theme='dark' />
    </main>
  );
};

export default HomeView;
