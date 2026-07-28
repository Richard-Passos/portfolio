import { Dictionary, t } from 'intlayer';

export default {
  key: 'location',
  content: {
    country: t({ en: 'Brazil', pt: 'Brasil' }),
    state: 'RS',
    gmt: 'GMT-3',
    timeZone: 'America/Sao_Paulo'
  }
} satisfies Dictionary;
