import FollowPointerArea from './Area';
import FollowPointerRoot from './Root';
import useFollowPointerSmoothPosition from './useSmoothPosition';
import useFollowPointerSmoothScale from './useSmoothScale';

const FollowPointer = FollowPointerRoot;

FollowPointer.Area = FollowPointerArea;

export default FollowPointer;
export {
  FollowPointerRoot as FollowPointer,
  FollowPointerArea,
  useFollowPointerSmoothPosition,
  useFollowPointerSmoothScale,
};
