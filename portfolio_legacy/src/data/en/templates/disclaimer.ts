import { disclaimerTemplateSchema } from '@/data/template/schemas';
import { createTemplateData } from '@/utils';

import { pagesRoot } from './root';

const hero = {
  title: [
    {
      type: 'alignText',
      align: 'left',
      children: [
        {
          text: 'D',
          emphasize: true
        },
        {
          text: 'isclaimer'
        }
      ]
    }
  ],
  effectiveDate: [
    {
      type: 'paragraph',
      children: [{ text: 'last updated: 2024-09-18' }]
    }
  ]
};

const blocks = [
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'WEBSITE DISCLAIMER' }]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'The information provided by ', bold: false },
      { text: 'Richard Passos’ Portfolio', bold: true },
      { text: ' (“Company”, “we”, “our”, “us”) on ', bold: false },
      { text: 'richardp.vercel.app', bold: true },
      {
        text: ' (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'EXTERNAL LINKS DISCLAIMER' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      { text: 'For example, the outlined ', bold: false },
      {
        type: 'link',
        url: 'https://policymaker.io/disclaimer/',
        children: [
          {
            text: 'Disclaimer'
          }
        ]
      },
      { text: ' has been created using ', bold: false },
      {
        type: 'link',
        url: 'https://policymaker.io/',
        children: [
          {
            text: 'PolicyMaker.io'
          }
        ]
      },
      {
        text: ', a free web application for generating high-quality legal documents. PolicyMaker’s ',
        bold: false
      },
      {
        type: 'link',
        url: 'https://policymaker.io/disclaimer/',
        children: [
          {
            text: 'disclaimer generator'
          }
        ]
      },
      {
        text: ' is an easy-to-use tool for creating an excellent sample Disclaimer template for a website, blog, eCommerce store or app.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'TESTIMONIALS DISCLAIMER' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume that all users will have the same experiences.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'YOUR INDIVIDUAL RESULTS MAY VARY.' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity, where the full testimonial contained extraneous information not relevant to the general public.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'ERRORS AND OMISSIONS DISCLAIMER' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Richard Passos’ Portfolio is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.',
        bold: false
      }
    ]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'In no event will Richard Passos’ Portfolio, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'LOGOS AND TRADEMARKS DISCLAIMER' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'All logos and trademarks of third parties referenced on richardp.vercel.app are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of Richard Passos’ Portfolio by such owners.',
        bold: false
      }
    ]
  },
  {
    type: 'heading',
    order: 2,
    children: [{ text: 'CONTACT US' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: ',
        bold: false
      },
      { text: 'richard.ac.passos12@gmail.com', bold: true }
    ]
  }
];

const footer = [
  {
    type: 'small',
    children: [
      { text: 'This ', bold: false },
      {
        type: 'link',
        url: 'https://policymaker.io/disclaimer/',
        children: [
          {
            text: 'Disclaimer'
          }
        ]
      },
      { text: ' was created for ', bold: false },
      { text: 'richardp.vercel.app', bold: true },
      { text: ' by ', bold: false },
      {
        type: 'link',
        url: 'https://policymaker.io',
        children: [
          {
            text: 'PolicyMaker.io'
          }
        ]
      },
      { text: ' on 2024-09-18.', bold: false }
    ]
  }
];

const data = createTemplateData<typeof disclaimerTemplateSchema>({
  hero: {}
});

export { data };
