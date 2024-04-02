import Sections from './sections';

const ContactView = () => {
  return (
    <>
      <Sections.Hero className='dark-layout' />

      <Sections.Contact theme='light' />

      <Sections.Services theme='dark' />
    </>
  );
};

export default ContactView;
