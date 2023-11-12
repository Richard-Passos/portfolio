import { forwardRef } from 'react';

import Animation from './Root';

const AnimationInView = (props, ref) => {
  return (
    <Animation
      ref={ref}
      type='whileInView'
      {...props}
    />
  );
};

export default forwardRef(AnimationInView);
