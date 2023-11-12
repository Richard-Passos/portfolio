import { forwardRef } from 'react';

import Animation from './Root';

const AnimationAnimate = (props, ref) => {
  return (
    <Animation
      ref={ref}
      type='animate'
      {...props}
    />
  );
};

export default forwardRef(AnimationAnimate);
