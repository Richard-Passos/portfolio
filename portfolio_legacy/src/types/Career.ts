type Career = {
  title: string;
  description: string;
  roles: string[];
  year: {
    start: number | string;
    end: number | string;
  };
};

export type { Career };
