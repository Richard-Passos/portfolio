'use client';

import data from './.data';

import { MagneticButton } from '@/components/input/Button/Magnetic';
import Drawer, { type DrawerProps } from '@/components/modules/Drawer';
import { LocaleMenu } from '@/components/navigation/Menu/Locale';

import { MenuDrawerTrigger, MenuDrawerTriggerMobile } from './Trigger';
import { useRef, useState } from 'react';
import { gsap, useGSAP } from '@/hooks/useGSAP';
import { useLenis } from 'lenis/react';

export type MenuDrawerProps = DrawerProps;

export const MenuDrawer = (props: MenuDrawerProps) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          paused: true,
          onStart: () => setOpen(true),
          onReverseComplete: () => setOpen(false)
        })
        .from(backdropRef.current, { opacity: 0, duration: 0.3, ease: 'power1.out' })
        .from(contentRef.current, { x: '100%', duration: 0.6, ease: 'expo.out(1.4)' }, '<')
        .from(
          'a',
          {
            opacity: 0,
            y: 20,
            scale: 0.96,
            duration: 0.45,
            ease: 'power3.out',
            stagger: 0.045
          },
          '-=0.25'
        );
    },
    { scope: contentRef }
  );

  const toggleTl = contextSafe((open: boolean) => {
    if (open) {
      lenis?.stop();
      tl.current?.play();
    } else {
      lenis?.start();
      tl.current?.reverse();
    }
  });

  return (
    <Drawer
      modal={false}
      trapFocus={false}
      open={open}
      onOpenChange={(ev) => toggleTl(ev.open)}
      swipeDirection='end'
      {...props}
    >
      <MenuDrawerTriggerMobile className='md:hidden'>{data.menu.label}</MenuDrawerTriggerMobile>

      <MenuDrawerTrigger data={{ open: data.menu.open, close: data.menu.close }} />

      <Drawer.Backdrop
        ref={backdropRef}
        className='will-change-[opacity]'
      />

      <Drawer.Positioner>
        <Drawer.Content
          ref={contentRef}
          className='max-w-xl border-l px-[6%] py-8 will-change-transform sm:pt-24 sm:pb-16'
        >
          <Drawer.Title className='border-b px-2 py-4'>{data.menu.label}</Drawer.Title>

          <nav className='mx-4 my-8 flex flex-col'>
            {data.nav.map((el) => (
              <MagneticButton
                key={el.url}
                href={el.url}
                className='h-16 w-fit rounded-none text-4xl'
                onClick={() => toggleTl(false)}
              >
                {el.label}
              </MagneticButton>
            ))}
          </nav>

          <div className='mt-auto flex flex-wrap px-4'>
            <LocaleMenu className='mr-2.5' />

            {data.socials.map(({ url, label, icon }) => (
              <MagneticButton
                key={url}
                href={url}
                iconOnly
                aria-label={label}
              >
                {icon}
              </MagneticButton>
            ))}
          </div>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer>
  );
};
