export type Project = {
  id: string;
  title: string;
  text: string;
  url?: string | null;
  year?: number | null;
  roles: string[];
  prev: string;
  next: string;
  thumbnail: string;
  banner: string;
  images?: string[] | null;
};
