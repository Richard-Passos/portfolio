import { Timestamp } from './Timestamp';

export type Career = {
  id: string;
  title: string;
  text: string;
  roles: string[];
  start: Timestamp;
  end?: Timestamp | null;
};
