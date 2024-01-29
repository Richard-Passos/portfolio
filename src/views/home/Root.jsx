import Sections from './sections';
import Texts from './texts';

const HomeView = () => {
  return (
    <main className='mx-auto max-w-bounds'>
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
