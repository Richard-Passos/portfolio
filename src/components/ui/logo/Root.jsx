import { globalsApi } from '@/api';
import { cn } from '@/utils';

import Icon from '../icon';
import Link from '../link';

const Root = async ({ className, ...props }) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data?.data || {};

  return (
    <Link
      className={cn(
        'aspect-[2] h-10 -translate-x-2 overflow-hidden rounded-sm px-2 py-1 transition-none',
        className,
      )}
      href='/'
      {...props}
    >
      <Icon
        className='size-full'
        src={personalInfo?.logo.src}
      />
    </Link>
  );
};

export default Root;
