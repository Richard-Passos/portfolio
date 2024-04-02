import Sections from './sections';

const NotFoundView = ({ data = {} }) => {
  return (
    <>
      <Sections.Hero className='dark-layout' data={data} />
    </>
  );
};

export default NotFoundView;
