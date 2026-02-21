import { Page } from '@/types';

const pages: Record<string, Page> = {
  home: {
    isSelected: true,
    label: 'Home'
  },
  about: {
    isSelected: true,
    label: 'About',
    metadata: {
      title: 'About',
      description:
        'Explore the journey of a full stack developer: my background, hobbies, mission, values, and personality.'
    }
  },
  contact: {
    isSelected: true,
    label: 'Contact',
    metadata: {
      title: 'Contact',
      description:
        'Get in touch! Contact me through the form or email to discuss your project needs and explore my full stack development services.'
    }
  },
  revalidate: {
    isSelected: false,
    label: 'Revalidate',
    metadata: {
      title: 'Revalidate',
      description: 'Revalidate cache'
    }
  },
  project: {
    type: 'project'
  },
  'not-found': {
    type: 'error',
    metadata: {
      title: 'Not Found',
      description:
        'Oops! The page you’re looking for doesn’t exist. Explore my portfolio to find out more about my work as a full stack developer.'
    }
  },
  error: {
    type: 'error'
  },
  'cookies-policy': {
    type: 'legal',
    label: 'Cookies Policy',
    metadata: {
      title: 'Cookies Policy',
      description:
        'Discover how we use cookies to enhance your experience on Richard Passos’ Portfolio. Learn about your choices and our commitment to privacy.'
    }
  },
  disclaimer: {
    type: 'legal',
    label: 'Disclaimer',
    metadata: {
      title: 'Disclaimer',
      description:
        'Explore our disclaimer outlining the limits of liability and responsibilities in using Richard Passos’ portfolio. Transparency for your peace of mind.'
    }
  },
  'privacy-policy': {
    type: 'legal',
    label: 'Privacy Policy',
    metadata: {
      title: 'Privacy Policy',
      description:
        'Explore our privacy policy outlining how we protect your data and ensure your rights while you use our services.'
    }
  },
  'terms-n-conditions': {
    type: 'legal',
    label: 'Terms and Conditions',
    metadata: {
      title: 'Terms and Conditions',
      description:
        'Explore the Terms and Conditions for using Richard Passos’ portfolio, ensuring transparency and security in your experience.'
    }
  }
};

export default pages;
