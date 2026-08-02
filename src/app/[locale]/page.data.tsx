import { HomeData } from './page';
import { Dictionary, insert, nest, t } from 'intlayer';

export default {
  key: 'home-page',
  content: {
    nodeType: 'object',
    hero: {
      title: t({
        en: (
          <h1>
            <span className='sm:mr-auto'>Beyond tech</span>{' '}
            <span className='sm:ml-auto'>
              algorithms <em>&</em>
            </span>{' '}
            <span className='sm:mr-auto'>results</span>
          </h1>
        ),
        pt: (
          <h1>
            <span className='sm:mr-auto'>Além de tech</span>{' '}
            <span className='sm:ml-auto'>
              algoritmos <em>&</em>
            </span>{' '}
            <span className='sm:mr-auto'>resultados</span>
          </h1>
        )
      }),
      left: {
        title: t({
          en: 'Available for Work',
          pt: 'Disponível para Trabalho'
        }),
        text: t({
          en: 'Open to internship opportunities, freelance work, and projects where I can build something that makes a difference.',
          pt: 'Aberto a oportunidades de estágio, freelance e projetos onde eu possa construir algo que faça diferença.'
        })
      },
      center: {
        title: t({
          en: 'Who? Why? More?',
          pt: 'Quem? Por quê? Mais?'
        }),
        text: t({
          en: "I'm Richard Passos, a web developer and Computer Science student. I make a difference one line at a time and believe great projects are built through dedication to the smallest details. The rest of the story is just below.",
          pt: 'Sou Richard Passos, desenvolvedor web e estudante. Faço a diferença linha por linha e acredito que grandes projetos nascem da dedicação aos pequenos detalhes O resto da história está logo abaixo.'
        })
      },
      right: {
        title: t({
          en: 'Computer Science @ UFRGS',
          pt: 'Ciência da Computação @ UFRGS'
        }),
        text: t({
          en: 'Computer Science undergraduate at UFRGS, turning theory into projects and learning into experience.',
          pt: 'Graduando na UFRGS, transformando teoria em projetos e aprendizado em experiência.'
        })
      }
    },
    mission: {
      text: t({
        en: 'This is my mission — Every challenge, experience, and line of code is an opportunity to improve. Every project can inspire colleagues and the community. Every repetition makes a difference, because excellence is simply the limit we converge toward.',
        pt: 'Essa é minha missão — Cada desafio, experiência, e linha de código é uma chance de fazer melhor. Cada projeto pode inspirar colegas, e a comunidade. Cada repetição faz a diferença, já que a excelência é apenas o limite para o qual convergimos.'
      }),
      items: [
        {
          id: 'improve',
          text: t({
            en: 'Improve',
            pt: 'Melhorar'
          })
        },
        {
          id: 'inspire',
          text: t({
            en: 'Inspire',
            pt: 'Inspirar'
          })
        },
        {
          id: 'repeat',
          text: t({
            en: 'Repeat',
            pt: 'Repetir'
          })
        }
      ]
    },
    career: {
      title: t({
        en: <h2>Career Overview</h2>,
        pt: (
          <h2>
            Visão <em>da</em> Carreira
          </h2>
        )
      })
    },
    experience: {
      title: t({
        en: 'Experience',
        pt: 'Experiência'
      }),
      text: t({
        en: "I don't settle for the basics. I strive to understand people and problems in order to build solutions that truly make sense.",
        pt: 'Não fico no básico, busco entender pessoas, e problemas para construir soluções que fazem sentido.'
      })
    },
    projects: {
      title: t({
        en: (
          <h2>
            Some of <b>my projects</b>
          </h2>
        ),
        pt: (
          <h2>
            Alguns dos <b>meus projetos</b>
          </h2>
        )
      })
    },
    but: {
      title: t({
        en: 'BUT',
        pt: 'MAS'
      }),
      text: t({
        en: "It's not all about technology",
        pt: 'Nem tudo é tecnologia'
      })
    },
    about: {
      title: t({
        en: <h2>Person Overview</h2>,
        pt: (
          <h2>
            Visão <em>da</em> Pessoa
          </h2>
        )
      }),
      about: {
        badge: t({
          en: '#about',
          pt: '#sobre'
        }),
        text: t({
          en: (
            <div>
              <p>
                I try not to let life run on autopilot. After all, we only get one. I enjoy paying
                attention to the little things, having a good conversation, feeling the warmth of
                the sun, learning something new, or simply noticing details that would usually go
                unnoticed.
              </p>

              <p>
                I enjoy being around people who share knowledge while staying humble. In the end,
                growing together has always seemed more meaningful than growing alone.
              </p>

              <p>
                There's a quote that has always stayed with me:{' '}
                <i>"Make a bet that love exists, and perform an act of love."</i>.
              </p>
            </div>
          ),
          pt: (
            <div>
              <p>
                tento não deixar a vida entrar no piloto automático. Afinal, só temos uma. Gosto de
                prestar atenção nas pequenas coisas, de aproveitar uma boa conversa, sentir o sol na
                pele, aprender algo novo ou simplesmente parar para perceber detalhes que
                normalmente passariam despercebidos.
              </p>

              <p>
                Gosto de estar perto de pessoas que compartilham conhecimento sem deixar a humildade
                de lado. No fim, crescer junto sempre parece mais interessante do que crescer
                sozinho.
              </p>

              <p>
                Uma frase que sempre ficou comigo diz:{' '}
                <i>"Faça uma aposta de que o amor existe, e realize um ato de amor."</i>.
              </p>
            </div>
          )
        })
      },
      better: {
        text: t({
          en: 'I want to be better than I was yesterday.',
          pt: 'Quero ser melhor do que fui ontem.'
        })
      },
      love: {
        text: t({
          en: 'I love playing video games.',
          pt: 'Adoro jogar video-game.'
        })
      },
      location: {
        title: insert(
          t({
            en: 'Located in {{country}} {{gmt}}',
            pt: 'Localizado no {{country}} {{gmt}}'
          })
        )
      },
      hobbies: {
        title: t({
          en: 'Beyond Code',
          pt: 'Fora do Código'
        }),
        text: t({
          en: (
            <div>
              <p>
                A large part of my free time ends up in video games, especially those that challenge
                patience, persistence, and the desire to improve. I also enjoy participating in
                hackathons and attending talks, always looking for new ideas, people, and
                experiences.
              </p>

              <p>
                But nothing replaces a good conversation or spending time with friends and family.
                Simple moments like these help me slow down, recharge, and remember that life
                happens far beyond the screen.
              </p>
            </div>
          ),
          pt: (
            <div>
              <p>
                Grande parte do meu tempo livre acaba nos videogames, principalmente aqueles que
                desafiam a paciência, a persistência e a vontade de melhorar. Também gosto de
                participar de hackathons e assistir talks, sempre em busca de novas ideias, pessoas
                e experiências.
              </p>

              <p>
                Mas nada substitui uma boa conversa ou passar um tempo com amigos e família. São
                momentos simples como esses que me fazem desacelerar, recarregar as energias e
                lembrar que a vida acontece muito além da tela.
              </p>
            </div>
          )
        })
      },
      gallery: {
        images: [
          '/images/selfie_00.jpeg',
          '/images/couple.jpeg',
          '/images/selfie_01.jpeg',
          '/images/lola.jpeg'
        ]
      }
    },
    skills: {
      title: 'Hard Skills',
      items: nest('skills')
    },
    cta: {
      title: 'CTA',
      text: t({
        en: "Let's turn ideas into efficient solutions together. Let's make it happen.",
        pt: 'Vamos juntos transformar ideias em soluções eficientes. Vamos fazer acontecer.'
      })
    }
  }
} satisfies Dictionary<HomeData>;
