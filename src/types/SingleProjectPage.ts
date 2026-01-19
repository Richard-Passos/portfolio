import { Metadata } from 'next';
import { ComponentProps } from 'react';

import Blocks from '@/components/templates/SingleProject/Blocks';
import { SingleProjectHeroProps } from '@/components/templates/SingleProject/Hero';

type SingleProjectPage = {
  type: 'single-project';
  slug: string;
  isSelected?: never;
  label?: never;
  hero: SingleProjectHeroProps;
  blocks: {
    [K in keyof typeof Blocks]: ComponentProps<(typeof Blocks)[K]>;
  };
  metadata: Metadata;
};

export default SingleProjectPage;
