import { Node } from '@/utils/serialize';

type CookiesConsent = {
  text: Node[];
  actions: {
    decline?: {
      label: Node[];
    };
    accpet: {
      label: Node[];
    };
  };
};

export type { CookiesConsent };
