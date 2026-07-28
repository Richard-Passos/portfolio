export type Project = {
  id: string;
  title: string;
  text: string;
  url: string | null;
  prev: string;
  next: string;
  thumbnail: string;
  images: string[] | null;
  roles: string[];
  year: number | null;
};
