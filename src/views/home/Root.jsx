import Section from './section';

const Root = () => {
  return (
    <main className='max-w-bounds mx-auto'>
      <Section.Hero />

      <Section.Work />

      <Section.About />
    </main>
  );
};

export default Root;
