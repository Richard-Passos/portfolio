import { Node } from '@/utils/serialize';

type Personal = {
  action: {
    label: string;
  };
  locationSeparator: string;
  description: Node[];
  madeBy: Node[];
  copyright: Node[];
};

export default Personal;
