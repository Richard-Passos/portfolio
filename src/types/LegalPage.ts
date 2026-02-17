import { Metadata } from 'next';

import { Node } from '@/utils/serialize';

import Theme from './Theme';

type LegalPage = {
  type: 'legal';
  theme: Theme;
  label: string;
  hero?: {
    title: Node[];
    effectiveDate: Node[];
  };
  blocks?: Node[];
  footer?: Node[];
  metadata?: Metadata;
};

export default LegalPage;
