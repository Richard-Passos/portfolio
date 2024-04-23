import { globalsApi } from '@/api';
import { cn, normId } from '@/utils';

import Icon from '../icon';
import Link from '../link';
import { languages } from '@/constants';

const Root = async ({ lang, className, ...props }) => {
  lang = normId(lang)

  const personalInfo =
    (await globalsApi.getOne('personal-info', `?lang=${lang}`)).data?.data || {};

  return (
    <Link
      className={cn(
        'aspect-[2] h-10 -translate-x-2 overflow-hidden rounded-sm px-2 py-1 transition-none',
        className,
      )}
      href={`/${lang === normId(languages[0]) ? '' : lang}`}
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
