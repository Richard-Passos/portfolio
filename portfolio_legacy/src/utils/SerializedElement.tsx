'use client';

import escapeHTML from 'escape-html';
import {
  CSSProperties,
  ComponentProps,
  ReactNode,
  memo,
  useCallback
} from 'react';

import { Image, ImageProps } from '@/components/display';
import { ScrollAnimate } from '@/components/motion';
import * as scrollAnimations from '@/components/motion/ScrollAnimate/animations';
import { Link, LinkProps } from '@/components/navigation';
import {
  Blockquote,
  BlockquoteProps,
  Icon,
  IconProps,
  List,
  ListItemProps,
  ListRootProps,
  ListRootType,
  Text,
  TextProps,
  Title,
  TitleOrder,
  TitleProps
} from '@/components/system';

import { cn } from './cn';
import { exhaustiveMatchingGuard } from './exhaustiveMatchingGuard';
import { Node } from './serialize';

type ElementNode =
  | { type: 'heading'; order: TitleOrder; children: Node[] }
  | { type: 'paragraph'; children: Node[] }
  | { type: 'small'; children: Node[] }
  | { type: 'alignText'; align: CSSProperties['textAlign']; children: Node[] }
  | { type: 'quote'; cite?: string; children: Node[] }
  | { type: 'list'; listType: ListRootType; children: Node[] }
  | { type: 'li'; children: Node[] }
  | { type: 'link'; url: string; children: Node[] }
  | { type: 'image'; src: string; alt: string }
  | { type: 'icon'; src: string; animation?: keyof typeof scrollAnimations };

type ElementProps = {
  heading?: Partial<TitleProps>;
  paragraph?: Partial<TextProps>;
  small?: Partial<TextProps>;
  alignText?: Partial<ComponentProps<'span'>>;
  quote?: Partial<BlockquoteProps>;
  list?: Partial<ListRootProps>;
  li?: Partial<ListItemProps>;
  link?: Partial<LinkProps>;
  image?: Partial<ImageProps>;
  icon?: Partial<
    IconProps & {
      wrapperProps?: ComponentProps<'div'>;
    }
  >;
};

const SerializedElement = memo(
  ({
    node,
    children,
    props
  }: {
    node: ElementNode;
    children?: ReactNode;
    props?: ElementProps;
  }) => {
    const renderElement = useCallback(() => {
      switch (node.type) {
        case 'heading':
          return (
            <Title
              order={node.order}
              {...props?.heading}
            >
              {children}
            </Title>
          );
        case 'paragraph':
          return <Text {...props?.paragraph}>{children}</Text>;
        case 'small':
          return (
            <Text
              component='small'
              {...props?.small}
              className={cn(
                `text-dimmed *:text-text text-xs`,
                props?.small?.className
              )}
            >
              {children}
            </Text>
          );
        case 'alignText':
          return (
            <span
              data-align={node.align}
              style={{ textAlign: node.align }}
              {...props?.alignText}
              className={cn('block', props?.alignText?.className)}
            >
              {children}
            </span>
          );
        case 'quote':
          return (
            <Blockquote
              cite={node.cite}
              {...props?.quote}
            >
              {children}
            </Blockquote>
          );
        case 'list':
          return (
            <List
              type={node.listType}
              {...props?.list}
              className={cn('py-2 pr-0', props?.list?.className)}
            >
              {children}
            </List>
          );
        case 'li':
          return <List.Item {...props?.li}>{children}</List.Item>;
        case 'link':
          return (
            <Link
              href={escapeHTML(node.url)}
              {...props?.link}
              className={cn('text-[1em] font-semibold', props?.link?.className)}
            >
              {children}
            </Link>
          );
        case 'image':
          return (
            <Image
              alt={node.alt}
              src={escapeHTML(node.src)}
              {...props?.image}
            />
          );
        case 'icon': {
          const { wrapperProps, ...iconProps } = props?.icon ?? {};

          const content = (
            <span
              {...wrapperProps}
              className={cn('inline-block size-[1em]', wrapperProps?.className)}
            >
              <Icon
                src={escapeHTML(node.src)}
                {...iconProps}
              />
            </span>
          );

          if (!node.animation) return content;

          return (
            <ScrollAnimate config={scrollAnimations[node.animation]}>
              {content}
            </ScrollAnimate>
          );
        }
        default:
          return exhaustiveMatchingGuard(node);
      }
    }, [node, children, props]);

    return renderElement();
  }
);
SerializedElement.displayName = 'SerializedElement';

export { SerializedElement };
export type { ElementNode, ElementProps };
