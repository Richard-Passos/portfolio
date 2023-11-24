'use client';

import { createContext } from 'react';

const ListProjectsContext = createContext({
  activeIdx: undefined,
  setActiveIdx: () => {},
});

export default ListProjectsContext;
