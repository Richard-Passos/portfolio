import * as Heros from '@/components/organisms/Heros';

type THeros = typeof Heros;

const getHero = <T extends keyof THeros>(id: T): THeros[T] => {
  const Hero = Heros[id] ?? null;

  if (Hero == null) throw new Error(`Invalid Hero: ${id}`);

  return Hero;
};

export default getHero;
export type { THeros };
