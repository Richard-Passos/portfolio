import { cva } from 'class-variance-authority';

import cn from './cn';

const cnv = ({ base, ...rest }) => {
  const className = cva(base, rest);

  return (variants) => cn(className(variants));
};

export default cnv;
