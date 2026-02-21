import { Metadata } from 'next';

import { Node } from '@/utils/serialize';

type LegalPage = {
  type: 'legal';
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
