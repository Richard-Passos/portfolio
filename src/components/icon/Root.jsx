import { cn, normalizeCompName } from '@/utils';

import { Svg } from '../ui';

const Icon = ({ name = '', className, ...props }) => {
  const Tag = Svg[normalizeCompName(name)] || Svg.QuestionMark;

  return (
    <Tag
      className={cn('h-5 w-5', className)}
      {...props}
    />
  );
};

export default Icon;
