import { cva } from 'class-variance-authority';

import cn from './cn';

const cnv = ({ base, ...rest }) => {
  const getClassName = cva(base, rest);

  return (variants) => cn(getClassName(variants));
};

export default cnv;
