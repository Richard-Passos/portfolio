'use client';

import { useMotionValue } from 'framer-motion';
import { useSelector } from 'react-redux';

import { useSmooth } from '@/hooks';
import { cn } from '@/utils';

import FollowPointer from '../follow-pointer';
import Icon from '../icon';

const VARIANTS_DEFAULT = {
  width: 91,
  height: 91,
  borderRadius: 999,
  scaleX: 0.1,
  scaleY: 0.1,
  x: null,
  y: null,
  zIndex: 99,
};

const Cursor = ({ className, style, ...props }) => {
  const { variant, content } = useSelector((data) => data.cursor),
    smoothVariant = {
      width: useSmooth(VARIANTS_DEFAULT.width),
      height: useSmooth(VARIANTS_DEFAULT.height),
      borderRadius: useSmooth(VARIANTS_DEFAULT.borderRadius),
      scaleX: useMotionValue(VARIANTS_DEFAULT.scaleX),
      scaleY: useMotionValue(VARIANTS_DEFAULT.scaleY),
      x: useMotionValue(VARIANTS_DEFAULT.x),
      y: useMotionValue(VARIANTS_DEFAULT.y),
      zIndex: useMotionValue(VARIANTS_DEFAULT.zIndex),
    },
    cursorContent = getContent(content);

  resetVariant(smoothVariant);
  updateVariant(variant, smoothVariant);

  return (
    <FollowPointer
      className={cn(
        'fixed flex items-center justify-center bg-primary',
        className,
      )}
      id='follow-pointer-cursor'
      style={{ ...smoothVariant, ...style }}
      {...props}
    >
      <div aria-label='Custom cursor'>{cursorContent}</div>
    </FollowPointer>
  );
};

const updateVariant = (variant, smoothVariant) => {
    Object.entries(variant).forEach(([key, value]) => {
      const prop = smoothVariant[key];

      if (prop) {
        prop.set(value);
      } else {
        smoothVariant[key] = value;
      }
    });
  },
  resetVariant = (smoothVariant) => {
    Object.keys(smoothVariant).forEach((key) => {
      smoothVariant[key].set(VARIANTS_DEFAULT[key]);
    });
  },
  getContent = (globalContent) => {
    let content = globalContent || { type: 'text', text: '', className: '' };

    const contents = {
      icon: (
        <Icon
          className={cn('h-2/3 w-2/3', content.className)}
          name={content.name}
        />
      ),
      text: (
        <span
          className={cn(
            'text-center text-[.45rem] leading-none',
            content.className,
          )}
        >
          {content.text}
        </span>
      ),
    };

    content = contents[content.type?.toLowerCase()];

    return content;
  };

export default Cursor;
