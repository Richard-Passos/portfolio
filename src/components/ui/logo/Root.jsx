import { globalsApi } from '@/api';
import Link from '../link';
import { cn } from '@/utils';

const Root = async ({ className, ...props }) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data || {};
  
  return (
     <Link
      className={cn(
         'h-10 rounded-sm px-2 py-1 -translate-x-2 aspect-[2] overflow-hidden',
        className,
      )}
      href='/'
      {...props}
    >
      <div className='size-full relative bg-current' style={{
        maskImage:  `url(${personalInfo?.logo.src})`,
      }}/>
    </Link>
  );
};

export default Root;
