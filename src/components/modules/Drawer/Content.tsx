import {
  DrawerBody as UiDrawerBody,
  DrawerBodyProps as UiDrawerBodyProps,
  DrawerCloseButton as UiDrawerCloseButton,
  DrawerCloseButtonProps as UiDrawerCloseButtonProps,
  DrawerContent as UiDrawerContent,
  DrawerContentProps as UiDrawerContentProps,
  DrawerHeader as UiDrawerHeader,
  DrawerHeaderProps as UiDrawerHeaderProps,
  DrawerOverlay as UiDrawerOverlay,
  DrawerOverlayProps as UiDrawerOverlayProps,
  DrawerTitle as UiDrawerTitle,
  DrawerTitleProps as UiDrawerTitleProps
} from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';

import { MergeProps } from '@/types';
import { cn } from '@/utils';

import { DrawerClient } from './Client';

type DrawerContentProps = MergeProps<
  PropsWithChildren<{
    title?: ReactNode;
    hasCloseButton?: boolean;
    overlayProps?: Partial<UiDrawerOverlayProps>;
    headerProps?: Partial<UiDrawerHeaderProps>;
    titleProps?: Partial<UiDrawerTitleProps>;
    closeProps?: Partial<UiDrawerCloseButtonProps>;
    bodyProps?: Partial<UiDrawerBodyProps>;
  }>,
  UiDrawerContentProps
>;

const DrawerContent = ({
  title,
  hasCloseButton,
  children,
  overlayProps,
  headerProps,
  titleProps,
  closeProps,
  bodyProps,
  ...props
}: DrawerContentProps) => {
  return (
    <DrawerClient>
      <UiDrawerOverlay
        data-lenis-prevent
        backgroundOpacity={0.35}
        {...overlayProps}
      />

      <UiDrawerContent
        data-lenis-prevent
        {...props}
        classNames={{
          ...props.classNames,
          inner: cn('left-0', props.classNames?.inner)
        }}
      >
        <UiDrawerHeader {...headerProps}>
          <UiDrawerTitle {...titleProps}>{title}</UiDrawerTitle>

          {hasCloseButton && <UiDrawerCloseButton {...closeProps} />}
        </UiDrawerHeader>

        <UiDrawerBody {...bodyProps}>{children}</UiDrawerBody>
      </UiDrawerContent>
    </DrawerClient>
  );
};

export { DrawerContent };
export type { DrawerContentProps };
