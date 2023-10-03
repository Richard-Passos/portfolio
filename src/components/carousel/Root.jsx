'use client';

import { createContext, useReducer } from 'react';

import { cn } from '@/utils';

const Root = ({ itemsLength, asChild, className, ...props }) => {
  const [{ currentIdx }, dispatch] = useReducer(reducer, {
    currentIdx: 0,
    length: itemsLength,
  });

  return (
    <CarouselContext.Provider value={{ currentIdx, dispatch }}>
      <section
        aria-label='Carousel'
        className={cn('flex w-full items-center justify-center', className)}
        {...props}
      />
    </CarouselContext.Provider>
  );
};

const reducer = (state, { type }) => {
  const actions = {
    increment() {
      return {
        ...state,
        currentIdx:
          state.currentIdx >= state.length - 1 ? 0 : state.currentIdx + 1,
      };
    },

    decrement() {
      return {
        ...state,
        currentIdx:
          state.currentIdx <= 0 ? state.length - 1 : state.currentIdx - 1,
      };
    },
  };

  const action = actions[type];

  return action ? action(state) : state;
};

const CarouselContext = createContext(null);

export default Root;
export { CarouselContext };
