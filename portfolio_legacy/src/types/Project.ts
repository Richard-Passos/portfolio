type Project = {
  isSelected?: boolean;
  href: string;
  title: string;
  roles: string[];
  year?: number | string;
  description: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  banner: {
    src: string;
    alt: string;
  };
  images?: {
    src: string;
    alt: string;
  }[];
};

export type { Project };
