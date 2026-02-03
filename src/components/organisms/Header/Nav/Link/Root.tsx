'use client';

import { Link, Magnetic } from '@/components/atoms';
import { LinkProps } from '@/components/atoms/Link';
import { MagneticAtomProps } from '@/components/atoms/Magnetic/Root';
import { cn } from '@/utils';

import HeaderNavLinkIndicator, {
  HeaderNavLinkIndicatorProps
} from './Indicator';

type HeaderNavLinkOrganismOrientationProps = {
  classNames?: {
    link?: LinkProps['className'];
    indicator?: HeaderNavLinkIndicatorProps['className'];
  };
  styles?: {
    link?: LinkProps['style'];
    indicator?: HeaderNavLinkIndicatorProps['style'];
  };
} & Pick<MagneticAtomProps, 'limit'>;

type HeaderNavLinkOrganismOwnProps = {
  isActive?: boolean;
  orientation?: 'horizontal' | 'vertical';
  magneticProps?: Partial<MagneticAtomProps>;
  indicatorProps?: Partial<HeaderNavLinkIndicatorProps>;
};

type HeaderNavLinkOrganismProps = HeaderNavLinkOrganismOwnProps &
  Omit<LinkProps, keyof HeaderNavLinkOrganismOwnProps>;

const HeaderNavLinkOrganism = ({
  className,
  isActive,
  orientation = 'horizontal',
  children,
  magneticProps,
  indicatorProps,
  ...props
}: HeaderNavLinkOrganismProps) => {
  const orientationProps: {
    horizontal: HeaderNavLinkOrganismOrientationProps;
    vertical: HeaderNavLinkOrganismOrientationProps;
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
          `group/link relative flex items-center justify-center rounded font-medium wrap-break-word text-current no-underline hover:z-10`,
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

export default HeaderNavLinkOrganism;
export type {
  HeaderNavLinkOrganismProps,
  HeaderNavLinkOrganismOrientationProps
};
