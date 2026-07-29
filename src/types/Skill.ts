import SKILLSMeta from '@/common/SKILLS.meta';
import { ComponentType, SVGProps } from 'react';

export type Skill = {
  id: keyof typeof SKILLSMeta;
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};
