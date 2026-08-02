import { Dictionary, t } from 'intlayer';
import { Metadata } from 'next';

export default {
  key: 'root-metadata',
  content: {
    title: {
      default: t({
        en: 'Richard P. an awesome Developer',
        pt: 'Richard P. um ótimo Desenvolvedor'
      }),
      template: '%s — Richard Passos'
    },
    description: t({
      en: 'Beyond tech, algorithms and results. Web developer and Computer Science student passionate about building meaningful solutions, one line of code at a time.',
      pt: 'Além de tech, algoritmos e resultados. Desenvolvedor web e estudante de Ciência da Computação apaixonado por construir soluções que fazem sentido, uma linha de código por vez.'
    }),
    creator: 'Richard Passos',
    publisher: 'Richard Passos',
    category: 'technology',
    keywords: t({
      en: [
        'Richard Passos',
        'Portfolio',
        'Developer',
        'Full-Stack Developer',
        'Computer Science',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'PHP',
        'Moodle',
        'React Native',
        'MongoDB',
        'Git',
        'Tailwind CSS',
        'Web Development',
        'Frontend',
        'Backend'
      ].join(', '),
      pt: [
        'Richard Passos',
        'Portfólio',
        'Desenvolvedor',
        'Desenvolvedor Full Stack',
        'Ciência da Computação',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'PHP',
        'Moodle',
        'React Native',
        'MongoDB',
        'Git',
        'Tailwind CSS',
        'Desenvolvimento Web',
        'Frontend',
        'Backend'
      ].join(', ')
    }),
    authors: [
      {
        name: 'Richard Passos',
        url: 'https://github.com/Richard-Passos'
      }
    ],
    openGraph: {
      type: 'website',
      title: t({
        en: 'Richard P. an awesome Developer',
        pt: 'Richard P. um ótimo Desenvolvedor'
      }),
      description: t({
        en: 'Beyond tech, algorithms and results. Web developer and Computer Science student passionate about building meaningful solutions, one line of code at a time.',
        pt: 'Além de tech, algoritmos e resultados. Desenvolvedor web e estudante de Ciência da Computação apaixonado por construir soluções que fazem sentido, uma linha de código por vez.'
      }),
      siteName: t({
        en: 'Richard Passos Portfolio',
        pt: 'Portfólio de Richard Passos'
      }),
      images: [
        {
          url: t({ en: 'src/app/en/og-en.png', pt: 'src/app/pt/og-pt.png' }),
          width: 1200,
          height: 675,
          alt: t({
            en: 'Richard Passos Portfolio',
            pt: 'Portfólio de Richard Passos'
          })
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t({
        en: 'Richard P. an awesome Developer',
        pt: 'Richard P. um ótimo Desenvolvedor'
      }),
      description: t({
        en: 'Beyond tech, algorithms and results. Web developer and Computer Science student passionate about building meaningful solutions, one line of code at a time.',
        pt: 'Além de tech, algoritmos e resultados. Desenvolvedor web e estudante de Ciência da Computação apaixonado por construir soluções que fazem sentido, uma linha de código por vez.'
      }),
      images: [t({ en: 'src/app/en/og-en.png', pt: 'src/app/pt/og-pt.png' })]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    }
  }
} satisfies Dictionary<Metadata>;
