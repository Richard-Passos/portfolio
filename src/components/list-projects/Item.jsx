'use client';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';

import { ListProjectsContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

import { IconButton } from '../button';
import { CursorLink } from '../link';
import { ScrollAnimationTransform } from '../scroll-animation';
import { Image, Link, Text } from '../ui';

const ListProjectsItem = ({
  className,
  href,
  index,
  img,
  title,
  role,
  ...props
}) => {
  return (
    <li
      className={cn(
        'relative w-full border-t last:border-b sm:focus-within:outline',
        className,
      )}
      {...props}
    >
      <SmallDeviceContent
        href={href}
        img={img}
        role={role}
        title={title}
      />

      <LargeDeviceContent
        href={href}
        index={index}
        role={role}
        title={title}
      />
    </li>
  );
};

const SmallDeviceContent = ({
  className,
  img,
  title,
  role,
  href,
  ...props
}) => {
  const animationConfig = {
    propPoints: ['-17.5%', '0%'],
  };

  return (
    <span
      className={cn('flex w-full flex-col gap-6 py-12 sm:hidden', className)}
      {...props}
    >
      <span className='aspect-square w-full overflow-hidden rounded-lg'>
        <ScrollAnimationTransform config={animationConfig}>
          <span className='h-[135%] w-full overflow-hidden'>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              className='h-full w-full object-cover'
              {...img}
            />
          </span>
        </ScrollAnimationTransform>
      </span>

      <section className='mb-4 ml-2 flex flex-col gap-2'>
        <Text.Subtitle className='text-3xl uppercase'>{title}</Text.Subtitle>

        <Text className='text-xs capitalize text-muted-content'>{role}</Text>
      </section>

      <IconButton
        asChild
        className='ml-2 w-fit'
        variants={{ size: 'sm' }}
      >
        <Link
          className='!gap-x-2 no-underline'
          href={href}
        >
          view project
          <IconButton.Icon animation='slideUpRight'>
            <ArrowTopRightIcon />
          </IconButton.Icon>
        </Link>
      </IconButton>
    </span>
  );
};

const LargeDeviceContent = ({
  className,
  href,
  index,
  title,
  role,
  ...props
}) => {
  const { setActiveIdx } = useContext(ListProjectsContext);

  return (
    <CursorLink
      className={cn(
        'group flex h-full w-full justify-around gap-x-6 py-12 no-underline max-sm:hidden',
        className,
      )}
      content={{
        type: 'text',
        text: 'View',
      }}
      href={href}
      onMouseEnter={(ev) => {
        setActiveIdx(index);

        isFunctionThanCall(props.onMouseEnter, ev);
      }}
      variant={{ scaleX: 0.75, scaleY: 0.75 }}
      {...props}
    >
      <span className='overflow-hidden overflow-ellipsis whitespace-nowrap text-[clamp(1.5rem,4.4vw,4rem)] uppercase leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:sm:-translate-x-6'>
        {title}
      </span>

      <span className='text-center text-[clamp(.75rem,1.3vw,1rem)] capitalize text-muted-content transition-transform duration-300 group-hover:-translate-x-1 group-hover:sm:translate-x-6'>
        {role}
      </span>
    </CursorLink>
  );
};

export default ListProjectsItem;
