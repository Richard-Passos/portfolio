import { forwardRef } from 'react';

import { Cursor } from '@/components';
import { Text } from '@/components/ui';

import cursorVariant from './cursorVariant';

const TextTitle = ({ cursorProps, ...props }, ref) => {
  cursorProps = {
    ...cursorProps,
    ref,
    variant: { ...cursorVariant, ...cursorProps?.variant },
  };

  return (
    <Cursor.Hover {...cursorProps}>
      <Text.Title {...props} />
    </Cursor.Hover>
  );
};

export default forwardRef(TextTitle);
