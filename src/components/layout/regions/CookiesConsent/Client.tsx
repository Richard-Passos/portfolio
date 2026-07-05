'use client';

import { ComponentProps } from 'react';
import CookieConsent from 'react-cookie-consent';

import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/display/Button';
import { MergeProps } from '@/types';

type CookiesConsentClientOwnProps = {
  customDeclineButtonProps?: Partial<ButtonProps>;
};

type CookiesConsentClientProps = MergeProps<
  CookiesConsentClientOwnProps,
  ComponentProps<typeof CookieConsent>
>;

const CookiesConsentClient = (props: CookiesConsentClientProps) => {
  return (
    <CookieConsent
      ButtonComponent={(props: any) => (
        <Button
          variant='default'
          {...props}
        />
      )}
      disableStyles
      {...props}
    />
  );
};

export { CookiesConsentClient };
export type { CookiesConsentClientProps };
