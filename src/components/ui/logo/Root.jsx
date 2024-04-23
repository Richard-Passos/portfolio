import { globalsApi } from '@/api';
import { cn, normId } from '@/utils';

import Icon from '../icon';
import Link from '../link';
import { locales } from '@/constants';

const Root = async ({ locale, className, ...props }) => {
  locale = normId(locale)

  const personalInfo =
    (await globalsApi.getOne('personal-info', `?locale=${locale}`)).data?.data || {};

  return (
    <Link
      className={cn(
        'aspect-[2] h-10 -translate-x-2 overflow-hidden rounded-sm px-2 py-1 transition-none',
        className,
      )}
      href={`/${locale === normId(locales[0]) ? '' : locale}`}
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
