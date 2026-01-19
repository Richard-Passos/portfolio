import { ComponentProps, ElementType } from 'react';

type PolymorphicRef<C extends ElementType> = ComponentProps<C>['ref'];

export default PolymorphicRef;
