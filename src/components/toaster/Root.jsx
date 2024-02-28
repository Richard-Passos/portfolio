'use client';

import { useState } from 'react';

import { Timerbar, Toast } from '@/components/ui';
import { TimesIcon } from '@/components/ui/icon/icons';
import { useToast } from '@/hooks';
import { TOAST_DURATION } from '@/hooks/useToast';
import { cn } from '@/utils';

const Toaster = () => {
  const { toasts } = useToast(),
    [isPaused, setIsPaused] = useState(false);

  return toasts.map(
    ({ id, variants, title, description, action, ...props }) => (
      <Toast
        key={id}
        onPause={() => setIsPaused(true)}
        onResume={() => setIsPaused(false)}
        variants={variants}
        {...props}
      >
        <Toast.Header>
          {title && <Toast.Title>{title}</Toast.Title>}

          <Toast.Description>{description}</Toast.Description>
        </Toast.Header>

        {action}

        <ToasterClose variants={variants} />

        <ToasterTimerbar
          pause={isPaused}
          variants={variants}
        />
      </Toast>
    ),
  );
};

const ToasterClose = ({ variants, className, ...props }) => {
  const { style } = variants;

  return (
    <Toast.Close
      className={cn(style === 'outline' && 'hover:bg-variant/20', className)}
      {...props}
    >
      <TimesIcon />
    </Toast.Close>
  );
};

const ToasterTimerbar = ({ variants, className, ...props }) => {
  const { style } = variants;

  return (
    <Timerbar
      className={cn(
        'absolute bottom-0 left-0',
        style !== 'outline' && '[--variant:--variant-c]',
        className,
      )}
      duration={TOAST_DURATION}
      variants={{
        color: 'inherit',
        size: 'sm',
      }}
      {...props}
    >
      <Timerbar.Indicator />
    </Timerbar>
  );
};

export default Toaster;
