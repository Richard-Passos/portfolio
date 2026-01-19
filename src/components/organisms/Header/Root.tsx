import { ComponentProps } from 'react';

import { cn } from '@/utils';

import HeaderContent from './Content';
import HeaderTheme from './Theme';

type HeaderOrganismOwnProps = {};

type HeaderOrganismProps = HeaderOrganismOwnProps &
  Omit<ComponentProps<'header'>, keyof HeaderOrganismOwnProps>;

const HeaderOrganism = ({ className, ...props }: HeaderOrganismProps) => {
  return (
    <HeaderTheme>
      <header
        className={cn(
          `max-w-bounds py-lg sm:py-xl absolute z-10 flex w-full flex-wrap items-center justify-between px-[6%] sm:px-[4%]`,
          className
        )}
        {...props}
      >
        {/* Using like these so Header doesn't use async, because Slot doesn't work with async children */}
        <HeaderContent />
      </header>
    </HeaderTheme>
  );
};

export default HeaderOrganism;
export type { HeaderOrganismProps };
