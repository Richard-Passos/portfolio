import { ReactNode } from 'react';

import SerializedElement, {
  ElementNode,
  ElementProps
} from './SerializedElement';
import SerializedText, { TextNode } from './SerializedText';

type Node = TextNode | ElementNode;

const serialize = (nodes?: Node[], props?: ElementProps): ReactNode =>
  nodes?.map((node) => {
    if (!node) return null;

    const id = crypto.randomUUID();

    if ('text' in node)
      return (
        <SerializedText
          key={id}
          node={node}
        />
      );

    const children =
      'children' in node ? serialize(node.children, props) : null;

    return (
      <SerializedElement
        key={id}
        node={node}
        props={props}
      >
        {children}
      </SerializedElement>
    );
  });

export { serialize };
export type { Node };
