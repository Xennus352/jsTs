export interface userType {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date;
  image: string;
  blog?: string;
  accounts?: string;
  role?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}
