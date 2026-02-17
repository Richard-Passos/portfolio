import * as Blocks from '@/components/organisms/Blocks';

type TBlocks = typeof Blocks;

const getBlock = <T extends keyof TBlocks>(id: T): TBlocks[T] => {
  const Block = Blocks[id] ?? null;

  if (Block == null) throw new Error(`Invalid Block: ${id}`);

  return Block;
};

export default getBlock;
export type { TBlocks };
