export type Project = {
  id: string;
  title: string;
  text: string;
  url?: string;
  prev: string;
  next: string;
  thumbnail: string;
  images?: string[];
  roles: string[];
  year?: number;
};
