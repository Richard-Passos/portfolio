import { CardSection, CardSectionProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type CardSectionMoleculeOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type CardSectionMoleculeProps = CardSectionMoleculeOwnProps &
  Omit<CardSectionProps, keyof CardSectionMoleculeOwnProps>;

const CardSectionMolecule = CardSection;

export default CardSectionMolecule;
export type { CardSectionMoleculeProps };
