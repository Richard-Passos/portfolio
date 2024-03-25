import Sections from './sections';

const NotFoundView = ({ data = {} }) => {
  return (
    <main className='dark-layout dark flex w-full max-w-bounds flex-col items-center'>
      <Sections.Hero data={data} />
    </main>
  );
};

export default NotFoundView;
