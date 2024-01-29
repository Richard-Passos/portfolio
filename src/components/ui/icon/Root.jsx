import Icons from './icons';

const Icon = ({ name, ...props }) => {
  const Tag = Icons[name] || Icons.Question;

  return <Tag {...props} />;
};

export default Icon;
