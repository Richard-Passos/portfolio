'use client';

// @ts-ignore
import { SplideSlide } from '@splidejs/react-splide';
import { ComponentProps } from 'react';

type CarouselItemMoleculeOwnProps = {};

type CarouselItemMoleculeProps = CarouselItemMoleculeOwnProps &
  Omit<ComponentProps<typeof SplideSlide>, keyof CarouselItemMoleculeOwnProps>;

const CarouselItemMolecule = SplideSlide;

export default CarouselItemMolecule;
export type { CarouselItemMoleculeProps };
