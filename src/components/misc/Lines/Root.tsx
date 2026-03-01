'use client';

import {
  ComponentProps,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react';

import { useEventListener } from '@/hooks';
import { cn, setRefs } from '@/utils';

type LinesRootProps = ComponentProps<'div'>;

const LinesRoot = ({ className, style, ref, ...props }: LinesRootProps) => {
  const innerRef = useRef<HTMLDivElement>(null),
    [top, setTop] = useState(0);

  const handleSetTop = useCallback(() => {
      if (!innerRef.current) return;

      const rect = innerRef.current.getBoundingClientRect();

      const top = rect.top + document.documentElement.scrollTop;

      setTop(top);
    }, [setTop]),
    resetTop = useCallback(() => {
      setTop(0);
    }, [setTop]);

  useLayoutEffect(() => {
    handleSetTop();

    return resetTop;
  }, [handleSetTop, resetTop]);

  useEventListener('resize', handleSetTop);

  return (
    <div
      className={cn(
        'text-gray-1 dark:text-dark-5 pointer-events-none absolute inset-x-0 top-0 h-(--document-height) translate-y-(--document-top) bg-[linear-gradient(currentColor_.8px,transparent_.8px),linear-gradient(to_right,currentColor_.8px,transparent_.8px)] bg-size-[250px_200px] bg-center',
        className
      )}
      ref={setRefs(ref, innerRef)}
      style={
        {
          '--document-top': `-${top}px`,
          ...style
        } as typeof style
      }
      {...props}
    />
  );
};

export { LinesRoot };
export type { LinesRootProps };
