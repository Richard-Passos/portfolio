const projectPage = {
    slug: 'project',
    sections: [
      { 
        slug: 'hero',
        theme: 'light',
        data: {
          actions: [
            {
              type: 'prev',
              icon: {
                src: '/images/arrow-left.svg'
              },
              animation: 'slideLeft',
              data: {
                href: '/projects',
                label: 'Prev',
                variants: {
                  color: 'main', size: 'sm'
                }
              }
            },
            {
              type: 'next',
              icon: {
                src: '/images/arrow-right.svg'
              },
              animation: 'slideRight',
              data: {
                href: '/projects',
                label: 'Next',
                variants: {
                  color: 'main', size: 'sm'
                }
              }
            }
          ]
        }
      },
      {
        slug: 'about',
        theme: 'light',
        id: 'scrollTo',
        data: {
          infoItems: [
            {
              title: 'Roles',
            },
            {
              title: 'Client',
            },
            {
              title: 'Year',
            }
          ],
          objectiveItems: [
            {
              title: 'The problem',
            },
            {
              title: 'The solution',
            }
          ]
        }
      },
      {
        slug: 'images',
        theme: 'dark',
        data: {
          title: [
            'Great',
            'images'
          ],
          infoItems: [
            {
              title: 'Roles',
            },
            {
              title: 'Client',
            },
            {
              title: 'Year',
            }
          ],
        }
      },
      {
        slug: 'next-page',
        theme: 'dark',
        data: {
          title: 'Next project',
          action: {
            icon: {
              src: '/images/arrow-up-right.svg',
            },
            data: {
              label: 'Go to next project',
              href: '/contact',
              variants: {
                color: 'main',
              },
            },
          },
        }
      }
    ]
}

export default projectPage
