import { ReactNode } from 'react';

const renderComp = (component: ReactNode, booleans: any[]) =>
  !booleans.some((bool) => !bool) && component;

export { renderComp };
