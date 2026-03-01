import { Node } from '@/utils/serialize';

type Footer = {
  action: {
    label: string;
  };
  locationSeparator: string;
  description: Node[];
  madeBy: Node[];
  copyright: Node[];
};

export type { Footer };
