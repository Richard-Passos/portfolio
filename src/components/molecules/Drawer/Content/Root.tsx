import {
  DrawerBody,
  DrawerBodyProps,
  DrawerCloseButton,
  DrawerCloseButtonProps,
  DrawerContent,
  DrawerContentProps,
  DrawerHeader,
  DrawerHeaderProps,
  DrawerOverlay,
  DrawerOverlayProps,
  DrawerTitle,
  DrawerTitleProps
} from '@mantine/core';
import { PropsWithChildren, ReactNode } from 'react';

import { PolymorphicRef } from '@/types';
import { cn, renderComp } from '@/utils';

type DrawerContentMoleculeOwnProps = PropsWithChildren<{
  title?: ReactNode;
  hasCloseButton?: boolean;
  overlayProps?: Partial<DrawerOverlayProps>;
  headerProps?: Partial<DrawerHeaderProps>;
  titleProps?: Partial<DrawerTitleProps>;
  closeProps?: Partial<DrawerCloseButtonProps>;
  bodyProps?: Partial<DrawerBodyProps>;
  ref?: PolymorphicRef<'div'>;
}>;

type DrawerContentMoleculeProps = DrawerContentMoleculeOwnProps &
  Omit<DrawerContentProps, keyof DrawerContentMoleculeOwnProps>;

const DrawerContentMolecule = ({
  className,
  title,
  hasCloseButton,
  children,
  overlayProps,
  headerProps,
  titleProps,
  closeProps,
  bodyProps,
  ...props
}: DrawerContentMoleculeProps) => {
  return (
    <>
      <DrawerOverlay
        backgroundOpacity={0.35}
        data-lenis-prevent
        {...overlayProps}
      />

      <DrawerContent
        data-lenis-prevent
        {...props}
        classNames={{
          ...props.classNames,
          inner: cn('left-0', props.classNames?.inner),
          content: cn(className, props.classNames?.content)
        }}
      >
        {renderComp(
          <DrawerHeader {...headerProps}>
            {renderComp(<DrawerTitle {...titleProps}>{title}</DrawerTitle>, [
              title
            ])}

            {renderComp(<DrawerCloseButton {...closeProps} />, [
              hasCloseButton
            ])}
          </DrawerHeader>,
          [title || hasCloseButton]
        )}

        <DrawerBody {...bodyProps}>{children}</DrawerBody>
      </DrawerContent>
    </>
  );
};

export default DrawerContentMolecule;
export type { DrawerContentMoleculeProps };
