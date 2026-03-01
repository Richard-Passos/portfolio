'use client';

import { Link, Magnetic } from '@/components/atoms';
import { MagneticProps } from '@/components/motion/Magnetic/Root';
import { LinkProps } from '@/components/navigation/Link';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

import HeaderNavLinkIndicator, {
  HeaderNavLinkIndicatorProps
} from './Indicator';

type HeaderNavLinkOrientationProps = {
  classNames?: {
    link?: LinkProps['className'];
    indicator?: HeaderNavLinkIndicatorProps['className'];
  };
  styles?: {
    link?: LinkProps['style'];
    indicator?: HeaderNavLinkIndicatorProps['style'];
  };
} & Pick<MagneticProps, 'limit'>;

type HeaderNavLinkOwnProps = {
  isActive?: boolean;
  orientation?: 'horizontal' | 'vertical';
  magneticProps?: Partial<MagneticProps>;
  indicatorProps?: Partial<HeaderNavLinkIndicatorProps>;
};

type HeaderNavLinkProps = MergeProps<HeaderNavLinkOwnProps, LinkProps>;

const HeaderNavLink = ({
  className,
  isActive,
  orientation = 'horizontal',
  children,
  magneticProps,
  indicatorProps,
  ...props
}: HeaderNavLinkProps) => {
  const orientationProps: {
    horizontal: HeaderNavLinkOrientationProps;
    vertical: HeaderNavLinkOrientationProps;
  } = {
    horizontal: {
      classNames: {
        link: 'h-10 text-center px-4',
        indicator: 'bottom-0.5 h-[2.5px] w-1/4'
      }
    },
    vertical: {
      classNames: {
        link: 'text-5xl sm:text-6xl py-3 px-8',
        indicator: 'left-0 w-1 h-1/3'
      },
      limit: {
        x: 0.1,
        y: 0.1
      }
    }
  };

  return (
    <Magnetic.Root
      limit={orientationProps[orientation].limit}
      {...magneticProps}
    >
      <Link
        className={cn(
          `group/link relative flex items-center justify-center rounded wrap-break-word text-current no-underline hover:z-10`,
          orientationProps[orientation].classNames?.link,
          className
        )}
        {...props}
      >
        {children}

        {isActive && (
          <HeaderNavLinkIndicator
            {...indicatorProps}
            className={cn(
              orientationProps[orientation].classNames?.indicator,
              indicatorProps?.className
            )}
          />
        )}
      </Link>
    </Magnetic.Root>
  );
};

export { HeaderNavLink };
export type { HeaderNavLinkProps, HeaderNavLinkOrientationProps };
