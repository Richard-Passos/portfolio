import { Fragment } from 'react';

import { cn } from '@/utils';

import { Badge } from '../../ui';
import { Text } from '../../ui/text';
import Item from './Root';

const BentoGridItemDescription = ({ className, data = {}, ...props }) => {
  return (
    <Item
      className={cn('min-h-60 flex-col justify-between', className)}
      {...props}
    >
      <Badge
        className='w-fit'
        variants={{ color: 'muted' }}
      >
        #{data.title}
      </Badge>

      <Text className='text-muted-content'>
        {data.description?.split('.').map((w, i) => {
          // TODO fix with rich text
          const boldRegex = /(.*)<b>(.*)<\/b>(.*)/g;

          const hasBold = boldRegex.test(w);

          const Bold = (
            <>
              {w.replace(boldRegex, '$1')}{' '}
              <span className='inline text-content'>
                {w.replace(boldRegex, '$2')}
              </span>{' '}
              {w.replace(boldRegex, '$3')}.{' '}
            </>
          );

          return <Fragment key={i}>{hasBold ? Bold : w && `${w}.`}</Fragment>;
        })}
      </Text>
    </Item>
  );
};

export default BentoGridItemDescription;
