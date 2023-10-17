import { forwardRef } from 'react';

import { Cursor } from '@/components';
import { Text as TextUi } from '@/components/ui';

import cursorVariant from './cursorVariant';

const Text = ({ cursorProps, ...props }, ref) => {
  cursorProps = {
    ...cursorProps,
    ref,
    variant: { ...cursorVariant, ...cursorProps?.variant },
  };

  return (
    <Cursor.Hover {...cursorProps}>
      <TextUi {...props} />
    </Cursor.Hover>
  );
};

export default forwardRef(Text);
