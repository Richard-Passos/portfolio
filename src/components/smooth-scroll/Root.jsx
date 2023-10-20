'use client';

import { ScrollerMotion } from 'scroller-motion';

const SmoothScroll = (props) => {
  return (
    <ScrollerMotion
      spring={smoothScrollConfig}
      {...props}
    />
  );
};

const smoothScrollConfig = { damping: 25, stiffness: 100, mass: 0.1 };

export default SmoothScroll;
export { smoothScrollConfig };
