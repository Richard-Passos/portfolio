'use client';

import { ComponentProps } from 'react';
import CookieConsent from 'react-cookie-consent';

import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';

type CookiesConsentClientOrganismOwnProps = {
  customDeclineButtonProps?: Partial<ButtonProps>;
};

type CookiesConsentClientOrganismProps = CookiesConsentClientOrganismOwnProps &
  Omit<
    ComponentProps<typeof CookieConsent>,
    keyof CookiesConsentClientOrganismOwnProps
  >;

const CookiesConsentClientOrganism = (
  props: CookiesConsentClientOrganismProps
) => {
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

export default CookiesConsentClientOrganism;
export type { CookiesConsentClientOrganismProps };
