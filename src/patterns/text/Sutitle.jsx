import { forwardRef } from 'react';

import { Cursor } from '@/components';
import { Text } from '@/components/ui';

import cursorVariant from './cursorVariant';

const TextSubtitle = ({ cursorProps, ...props }, ref) => {
  cursorProps = {
    ...cursorProps,
    ref,
    variant: { ...cursorVariant, ...cursorProps?.variant },
  };

  return (
    <Cursor.Hover {...cursorProps}>
      <Text.Subtitle {...props} />
    </Cursor.Hover>
  );
};

export default forwardRef(TextSubtitle);
