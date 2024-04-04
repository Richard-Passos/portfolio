import { globalsApi } from '@/api';
import { cn } from '@/utils';

import Link from '../link';

const Root = async ({ className, ...props }) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data || {};

  return (
    <Link
      className={cn(
        'aspect-[2] h-10 -translate-x-2 transition-none overflow-hidden rounded-sm px-2 py-1',
        className,
      )}
      href='/'
      {...props}
    >
      <div
        className='relative size-full bg-current [mask-repeat:no-repeat]'
        style={{
          maskImage: `url(${personalInfo?.logo.src})`,
        }}
      />
    </Link>
  );
};

export default Root;
