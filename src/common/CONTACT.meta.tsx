import { GithubIcon } from '@/components/system/Icon/Github';
import { InstagramIcon } from '@/components/system/Icon/Instagram';
import { LinkedinIcon } from '@/components/system/Icon/Linkedin';
import { ComponentType, SVGProps } from 'react';

export default {
  github: {
    Icon: GithubIcon
  },
  instagram: {
    Icon: InstagramIcon
  },
  linkedin: {
    Icon: LinkedinIcon
  }
} satisfies Record<string, { Icon: ComponentType<SVGProps<SVGSVGElement>> }>;
