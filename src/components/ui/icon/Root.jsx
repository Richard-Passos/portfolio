import { forwardRef } from 'react';

import Icons from './icons';

const Icon = ({ name, ...props }, ref) => {
  const Tag = Icons[name] || Icons.Question;

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Icon);
