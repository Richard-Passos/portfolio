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

const smoothScrollConfig = { damping: 10, stiffness: 100, mass: 0.2 };

export default SmoothScroll;
export { smoothScrollConfig };
