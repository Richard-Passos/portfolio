import { Children, isValidElement, ReactNode } from 'react';

export const hasOnlyDirectTag = (children: ReactNode, tags: string | string[]): boolean => {
  tags = typeof tags === 'string' ? [tags] : tags;

  const childArray = Children.toArray(children);

  if (childArray.length != 1) {
    return false;
  }

  const child = childArray[0];
  return isValidElement(child) && tags.includes(child.type as string);
};
