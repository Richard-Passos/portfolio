'use client';

import { useCallback, useEffect, useRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useEventListener } from '@/hooks';
import { useHeightContext } from '@/hooks/contexts';
import { Heights } from '@/store/slices/height';
import { setRefs } from '@/utils';

type HeightSetAtomOwnProps = {
  name: keyof Heights;
  isDocument?: boolean;
};

type HeightSetAtomProps = HeightSetAtomOwnProps &
  Omit<SlotProps, keyof HeightSetAtomOwnProps>;

const HeightSetAtom = ({
  name,
  isDocument,
  children,
  ref,
  ...props
}: HeightSetAtomProps) => {
  const innerRef = useRef<HTMLElement>(null),
    { setHeight } = useHeightContext();

  const handleSetHeight = useCallback(() => {
      const element = isDocument ? document.documentElement : innerRef.current;

      if (!element) return;

      const height = element.offsetHeight;

      setHeight({ [name]: height });
    }, [name, isDocument, setHeight]),
    resetHeight = useCallback(() => {
      setHeight({ [name]: 0 });
    }, [name, setHeight]);

  useEffect(() => {
    handleSetHeight();

    return () => {
      resetHeight();
    };
  }, [handleSetHeight, resetHeight]);

  useEventListener('resize', handleSetHeight);

  if (isDocument) return children;

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {children}
    </Slot>
  );
};

export default HeightSetAtom;
export type { HeightSetAtomProps };
