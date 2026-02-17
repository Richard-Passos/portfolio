import { TypeVariants } from '@/types';
import getCard, { TCards } from '@/utils/getCard';

import RenderOrganism from './Root';

type BlockRenderOrganismProps = TypeVariants<TCards>;

const BlockRenderOrganism = (props: BlockRenderOrganismProps) => {
  return (
    <RenderOrganism<TCards>
      fn={getCard}
      {...props}
    />
  );
};

export default BlockRenderOrganism;
export type { BlockRenderOrganismProps };
