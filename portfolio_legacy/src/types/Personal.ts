type Personal = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  title: string;
  description: string;
  availability: string;
  keywords: string;
  authors: { name: string; url: string }[];
  location: {
    country: string;
    state: string;
    gmt: string;
  };
  socials: { id: string; href: string; icon: string; label: string }[];
  buyCoffee: {
    icon: string;
    href: string;
  };
};

export type { Personal };
