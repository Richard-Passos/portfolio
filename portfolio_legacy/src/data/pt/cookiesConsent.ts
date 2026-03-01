import { CookiesConsent } from '@/types';

const cookiesConsent: CookiesConsent = {
  text: [
    {
      text: 'Eu uso cookies para melhorar sua experiência. Ao continuar, você concorda com a minha '
    },
    {
      type: 'link',
      url: '/cookies-policy',
      children: [
        {
          text: 'Política de Cookies'
        }
      ]
    },
    {
      text: '.'
    }
  ],
  actions: {
    accpet: {
      label: [
        {
          text: 'Concordo'
        }
      ]
    }
  }
};

export { cookiesConsent };
