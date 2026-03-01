'use client';

import { DrawerRoot, DrawerRootProps } from '@mantine/core';
import { useCallback } from 'react';

import { useUpdateEffect } from '@/hooks';
import { useBooleanContext } from '@/hooks/contexts';
import { usePathname } from '@/i18n/navigation';
import { MergeProps } from '@/types';

type DrawerClientProps = MergeProps<
  Partial<Pick<DrawerRootProps, 'onClose' | 'opened'>>,
  DrawerRootProps
>;

const DrawerClient = ({ onClose, ...props }: DrawerClientProps) => {
  const { value, setFalse } = useBooleanContext(),
    pathname = usePathname();

  const handleClose = useCallback(() => {
    setFalse();

    onClose?.();
  }, [setFalse, onClose]);

  // Close when page changes
  useUpdateEffect(setFalse, [setFalse, pathname]);

  return (
    <DrawerRoot
      opened={value}
      data-opened={value ? true : undefined}
      onClose={handleClose}
      {...props}
    />
  );
};

export { DrawerClient };
export type { DrawerClientProps };
