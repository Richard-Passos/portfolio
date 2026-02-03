import { ComponentProps } from 'react';

import { Portal } from '@/components/atoms';
import { cn, serialize } from '@/utils';
import { cookiesConsentApi, getLocale } from '@/utils/actions';

import CookiesConsentClient, { CookiesConsentClientProps } from './Client';

type CookiesConsentOrganismOwnProps = {
  bannerProps?: Partial<CookiesConsentClientProps>;
};

type CookiesConsentOrganismProps = CookiesConsentOrganismOwnProps &
  Omit<ComponentProps<'div'>, keyof CookiesConsentOrganismOwnProps>;

const CookiesConsentOrganism = async ({
  className,
  bannerProps,
  ...props
}: CookiesConsentOrganismProps) => {
  const locale = await getLocale();

  const res = await cookiesConsentApi.get({ locale });

  if (!res.ok) return null;

  const { data } = res;

  return (
    <Portal>
      <div
        className={cn(
          `z-max pointer-events-none fixed right-0 bottom-0 flex w-full justify-end p-3`,
          className
        )}
        {...props}
      >
        <CookiesConsentClient
          acceptOnScroll
          acceptOnScrollPercentage={10}
          buttonText={serialize(data.actions.accpet.label)}
          declineButtonText={serialize(data.actions.decline?.label)}
          enableDeclineButton={!!data.actions.decline}
          {...bannerProps}
          buttonWrapperClasses={cn(
            `
              flex gap-2.5

              max-sm:flex-col

              sm:items-center
            `,
            bannerProps?.buttonWrapperClasses
          )}
          containerClasses={cn(
            `
              pointer-events-auto flex gap-3 rounded border bg-body px-4 py-2.5
              shadow

              max-sm:flex-col

              sm:items-center
            `,
            bannerProps?.containerClasses
          )}
          contentClasses={cn('max-w-sm', bannerProps?.contentClasses)}
          customDeclineButtonProps={{
            variant: 'light',
            color: 'red',
            ...bannerProps?.customDeclineButtonProps
          }}
        >
          {serialize(data.text)}
        </CookiesConsentClient>
      </div>
    </Portal>
  );
};

export default CookiesConsentOrganism;
export type { CookiesConsentOrganismProps };
