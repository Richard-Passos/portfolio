import { createTemplateRegistry, getTranslations } from '@/utils';

const templateRegistry = createTemplateRegistry({
  about: {
    type: 'default',
    isSelected: true,
    schema: () => import('./schemas/about').then((m) => m.schema),
    data: (locale) => getTranslations(locale).,
    metadata: {
      en: () =>
        import('@/data/en/templates/about').then(
          (m) => m.aboutTemplateMetadata
        ),
      pt: () =>
        import('@/data/pt/templates/about').then((m) => m.aboutTemplateMetadata)
    }
  },
  home: {
    type: 'default',
    isSelected: true,
    schema: () => import('./schemas/home').then((m) => m.schema),
    data: {
      en: () =>
        import('@/data/en/templates/home').then((m) => m.homeTemplateData),
      pt: () =>
        import('@/data/pt/templates/home').then((m) => m.homeTemplateData)
    },
    metadata: {
      en: () =>
        import('@/data/en/templates/home').then((m) => m.homeTemplateMetadata),
      pt: () =>
        import('@/data/pt/templates/home').then((m) => m.homeTemplateMetadata)
    }
  }
} as const);

export { templateRegistry };
