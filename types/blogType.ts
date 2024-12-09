export type blogType = {
  id: string;

  title: string;

  description: string;

  link: string;

  updatedAt: Date;

  User?: {
    id: string;
  } | null;
};
