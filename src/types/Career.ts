import { ReactNode } from 'react';
import { Timestamp } from './Timestamp';

export type Career = {
  id: string;
  title: ReactNode;
  text: ReactNode;
  roles: string[];
  start: Timestamp;
  end?: Timestamp | null;
};
