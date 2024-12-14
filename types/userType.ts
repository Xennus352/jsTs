export interface userType {
  id: String;
  name: string | null;

  email: string | null;

  emailVerified: Date | null;

  image: string | null;

  blog: string | null;

  accounts: string | null;

  role?: string;
  createdAt: Date;
  updatedAt: Date;
}
