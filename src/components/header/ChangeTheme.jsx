'use client'

import { useDispatch, useSelector } from 'react-redux';
import { useWindowSize } from '@/hooks';
import {  useMotionValueEvent, useScroll } from 'framer-motion';
import {  useEffect, useRef } from 'react';
import { setHeaderTheme } from '@/redux';
import { Slot } from '@radix-ui/react-slot';

const HeaderChangeTheme = ({ theme, force, ...props }) => {
  const header = useSelector((data) => data.header),
  windowSize = useWindowSize(),
  dispatch = useDispatch(),
  ref = useRef(null),
 hasRendered = useRef(false)

  const handleSetTheme = (y) => {
    if(hasRendered.current) {
      if(y === 1 && header.theme !== theme) dispatch(setHeaderTheme(theme))
      
    } else {
      hasRendered.current = true
    }
  }

  const limitY = windowSize.height / (header.height * 100)
  
  const {scrollYProgress: y1} = useScroll({
    target: ref,
    offset: [`0 ${limitY + 0.001}`, `0 ${limitY}`]
  })
  
  useMotionValueEvent(y1, 'change', handleSetTheme)

  const {scrollYProgress: y2} = useScroll({
    target: ref,
    offset: [`1 ${limitY - 0.001}`, `1 ${limitY}`]
  })
  
  useMotionValueEvent(y2, 'change', handleSetTheme)

  useEffect(() => {
    if(force) dispatch(setHeaderTheme(theme))
  }, [force])

  return (
    <Slot
    ref={ref}
      {...props}
    />
  );
};

export default HeaderChangeTheme;
