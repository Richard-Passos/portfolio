'use client';

import { ScrollerMotion } from 'scroller-motion';

const SmoothScroll = ({ spring, ...props }) => {
  return (
    <ScrollerMotion
      disabled
      spring={{ ...scrollSmoothConfig, ...spring }}
      {...props}
    />
  );
};

const scrollSmoothConfig = { damping: 10, stiffness: 100, mass: 0.2 };

export default SmoothScroll;
export { scrollSmoothConfig };
