'use client';

import { ArrowDownIcon } from '@radix-ui/react-icons';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import { useSmooth } from '@/hooks';
import { cn } from '@/utils';

import { MagneticLink } from '../link';
import { magneticSmoothConfig } from '../magnetic/Root';
import { buttonSizes } from '../ui/button';

const ScrollIndicator = ({ className, href, ...props }) => {
  const { x, y } = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const resetPosition = () => {
      x.set(0);
      y.set(0);
    },
    updatePosition = ({ clientX, clientY, target }) => {
      const { left, top, width, height } = target.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };

      x.set(clientX - center.x);
      y.set(clientY - center.y);
    };

  return (
    <div
      className={cn(
        'relative aspect-square rounded-full [--icon-dimen:theme(spacing.4)] sm:[--icon-dimen:theme(spacing.5)] md:[--icon-dimen:theme(spacing.6)]',
        buttonSizes.md,
        className,
      )}
    >
      <Border
        className='opacity-10 dark:opacity-5'
        limit={0}
        style={{
          x,
          y,
        }}
      />

      <Border
        className='opacity-40 dark:opacity-25'
        limit={0.2}
        style={{
          x,
          y,
        }}
      />

      <Border
        className='opacity-70 dark:opacity-50'
        limit={0.4}
        style={{
          x,
          y,
        }}
      />

      <Border
        style={{
          x,
          y,
        }}
      />

      <MagneticLink
        className='h-full w-full rounded-inherit hover:no-underline'
        href={href}
        limit={0.55}
        onClick={() => {
          const el = document.getElementById(href.slice(1));

          if (el) window.scrollTo(0, el.offsetTop);
        }}
        onMouseLeave={resetPosition}
        onMouseMove={updatePosition}
        {...props}
      >
        <ArrowDownIcon className='h-[--icon-dimen] w-[--icon-dimen]' />
      </MagneticLink>
    </div>
  );
};

const Border = ({ limit = 0.6, style, className, ...props }) => {
  const x = useSmooth(
      useTransform(style.x, (val) => val * limit),
      magneticSmoothConfig,
    ),
    y = useSmooth(
      useTransform(style.y, (val) => val * limit),
      magneticSmoothConfig,
    );

  return (
    <motion.span
      className={cn(
        'absolute inset-0 w-auto rounded-inherit border border-content',
        className,
      )}
      style={{
        ...style,
        x,
        y,
      }}
      {...props}
    />
  );
};

export default ScrollIndicator;
