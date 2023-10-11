import FollowPointer from '../follow-pointer';

const CursorArea = (props) => {
  return (
    <FollowPointer.Area
      id='follow-pointer-cursor'
      {...props}
    />
  );
};

export default CursorArea;
