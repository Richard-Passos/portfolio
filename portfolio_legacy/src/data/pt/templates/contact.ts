import { contactTemplateSchema } from '@/data/template/schemas';
import { createTemplateData } from '@/utils';

import { personal } from '../../personal';
import { skills } from '../../skills';

const data = createTemplateData<typeof contactTemplateSchema>({
  hero: {
    title: [
      {
        text: 'Quer m'
      },
      {
        text: 'e c',
        emphasize: true
      },
      {
        text: 'hamar'
      },
      {
        text: '?',
        emphasize: true
      }
    ]
  },
  form: {
    title: [
      {
        text: 'Sem estresse — eu cuido disso'
      }
    ],
    optionalLabel: 'opcional',
    to: {
      label: [
        {
          text: 'Para:'
        }
      ],
      email: personal.email ?? '',
      subject: '👋 Olá Richard, eu gostaria de contratá-lo!'
    },
    messages: {
      loading: [{ text: 'Enviando email...' }],
      success: [{ text: 'Email enviado!' }],
      error: [{ text: 'Oops... Por favor, tente novamente.' }]
    },
    fields: {
      name: {
        label: 'Nome',
        placeholder: 'Fulano Silva',
        defaultValue: '',
        errors: {
          min: 'Por favor, esse não pode ser seu nome.'
        }
      },
      email: {
        label: 'Email',
        placeholder: 'fulano@silva.com',
        defaultValue: '',
        errors: {
          email: 'Esse email parece um pouco estranho.'
        }
      },
      subject: {
        label: 'Assunto',
        placeholder: 'Quero te contratar!',
        defaultValue: ''
      },
      message: {
        label: 'Mensagem',
        placeholder:
          '👋 Olá Richard! Eu adoraria se você pudesse me ajudar com...',
        defaultValue: '',
        errors: {
          min: 'Vamos lá... você pode fazer melhor que isso.',
          max: 'Qual é... pega leve.'
        }
      },
      submit: {
        label: [
          {
            text: 'Enviar mensagem'
          }
        ]
      }
    }
  },
  skills: {
    title: [{ text: 'Ski' }, { text: 'll', emphasize: true }, { text: 's' }],
    image: {
      src: '/images/selfie.webp',
      alt: 'Richard Passos, desenvolvedor full-stack de cabelo curto e escuro, vestindo uma camisa vermelha, jaqueta preta e colar prateado, está em frente a um mural abstrato colorido.'
    },
    items: skills
  }
});

export { data };
