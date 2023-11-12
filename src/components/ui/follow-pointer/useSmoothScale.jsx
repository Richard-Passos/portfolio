'use client';

import { useTransform } from 'framer-motion';
import { useSelector } from 'react-redux';

import { useSmooth } from '@/hooks';

const useFollowPointerSmoothScale = (id, defaultScale, smoothConfig) => {
  const { showList } = useSelector((data) => data['follow-pointer']);

  const isShowing = showList.includes(id);

  return useSmooth(
    useTransform(() => (isShowing ? defaultScale?.get() ?? 1 : 0)),
    smoothConfig,
  );
};

export default useFollowPointerSmoothScale;
