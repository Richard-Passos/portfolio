import Sections from './sections';

const NotFoundView = ({ data = {} }) => {
  return (
    <>
      <Sections.Hero
        theme='dark'
        data={data}
      />
    </>
  );
};

export default NotFoundView;
