'use client'

import { useEffect, useRef } from "react"

const useEventListener = (ev, fn, el, opts) => {
  const fnRef = useRef(fn)

  useEffect(() => {
    const targetEl = el?.current ?? window

    targetEl.addEventListener(ev, fnRef.current, opts)

    return () => targetEl.removeEventListener(ev, fnRef.current, opts)
  
  }, [ev, el, opts])
}

export default useEventListener
