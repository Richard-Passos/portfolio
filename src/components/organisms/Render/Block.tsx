import { TypeVariants } from '@/types';
import getBlock, { TBlocks } from '@/utils/getBlock';

import RenderOrganism from './Root';

type BlockRenderOrganismProps = TypeVariants<TBlocks>;

const BlockRenderOrganism = (props: BlockRenderOrganismProps) => {
  return (
    <RenderOrganism<TBlocks>
      fn={getBlock}
      {...props}
    />
  );
};

export default BlockRenderOrganism;
export type { BlockRenderOrganismProps };
