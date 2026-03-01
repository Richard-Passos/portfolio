import { CookiesConsent } from '@/types';

const cookiesConsent: CookiesConsent = {
  text: [
    {
      text: 'I use cookies to improve your experience. By using this site, you agree to my'
    },
    {
      text: ' '
    },
    {
      type: 'link',
      url: '/cookies-policy',
      children: [
        {
          text: 'Cookies Policy'
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
          text: 'I Agree'
        }
      ]
    }
  }
};

export { cookiesConsent };
