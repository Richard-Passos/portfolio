export const PAGES = {
  main: [
    {
      url: '#work',
      label: 'Carreira'
    },
    {
      url: '#about',
      label: 'Sobre'
    },
    {
      url: '#contact',
      label: 'Contato'
    }
  ] as { url: string; label: string }[],
  legal: [
    {
      id: 'cookies-policy',
      label: 'Política de Cookies'
    },
    {
      id: 'disclaimer',
      label: 'Isenção de Garantia'
    },
    {
      id: 'privacy-policy',
      label: 'Política de Privacidade'
    },
    {
      id: 'terms-n-conditions',
      label: 'Termos e Condições'
    }
  ] as { id: string; label: string }[]
} as const;
