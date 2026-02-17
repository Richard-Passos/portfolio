import { TypeVariants } from '@/types';
import getHero, { THeros } from '@/utils/getHero';

import RenderOrganism from './Root';

type HeroRenderOrganismProps = TypeVariants<THeros>;

const HeroRenderOrganism = (props: HeroRenderOrganismProps) => {
  return (
    <RenderOrganism<THeros>
      fn={getHero}
      {...props}
    />
  );
};

export default HeroRenderOrganism;
export type { HeroRenderOrganismProps };
