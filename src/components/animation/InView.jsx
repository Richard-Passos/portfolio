import Animation from './Root';

const AnimationInView = (props) => {
  return (
    <Animation
      type='whileInView'
      {...props}
    />
  );
};

export default AnimationInView;
