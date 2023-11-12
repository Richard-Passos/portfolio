import Sections from './sections';

const HomeView = () => {
  return (
    <main className='relative mx-auto max-w-bounds'>
      <Sections.Hero />

      <Sections.Work />

      <Sections.About />
    </main>
  );
};

export default HomeView;
