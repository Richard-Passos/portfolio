'use client';

import { useTransform } from 'framer-motion';

import { useFollowPointer, useSmooth } from '@/hooks';

const useFollowPointerSmoothPosition = (ref, position, smoothConfig) => {
  const pointerPos = useFollowPointer(ref);

  const x = useSmooth(
      useTransform(() => position.x?.get() ?? pointerPos.x.get()),
      smoothConfig,
    ),
    y = useSmooth(
      useTransform(() => position.y?.get() ?? pointerPos.y.get()),
      smoothConfig,
    );

  return { x, y };
};

export default useFollowPointerSmoothPosition;
