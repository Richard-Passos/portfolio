import { Dictionary, t } from 'intlayer';

export default {
  key: 'gallery-parallax-carousel',
  content: {
    prevSlideMessage: t({
      en: 'Go to previous image',
      pt: 'Ver imagem anterior'
    }),
    nextSlideMessage: t({
      en: 'Go to next image',
      pt: 'Ver próxima imagem'
    }),
    firstSlideMessage: t({
      en: 'You are viewing the first image',
      pt: 'Você está na primeira imagem'
    }),
    lastSlideMessage: t({
      en: 'You are viewing the last image',
      pt: 'Você está na última imagem'
    }),
    paginationBulletMessage: t({
      en: 'Go to image {{index}}',
      pt: 'Ir para a imagem {{index}}'
    }),
    slideLabelMessage: t({
      en: 'Image {{index}} of {{slidesLength}}',
      pt: 'Imagem {{index}} de {{slidesLength}}'
    }),
    containerMessage: t({
      en: 'Image gallery',
      pt: 'Galeria de imagens'
    }),
    containerRoleDescriptionMessage: t({
      en: 'carousel',
      pt: 'carrossel'
    }),
    itemRoleDescriptionMessage: t({
      en: 'image',
      pt: 'imagem'
    })
  }
} satisfies Dictionary;
