import * as Cards from '@/components/organisms/Cards';

type TCards = typeof Cards;

const getCard = <T extends keyof TCards>(id: T): TCards[T] => {
  const Card = Cards[id] ?? null;

  if (Card == null) throw new Error(`Invalid Card: ${id}`);

  return Card;
};

export default getCard;
export type { TCards };
