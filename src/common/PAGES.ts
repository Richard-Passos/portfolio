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
  ] as { url: string; label: string }[]
} as const;
