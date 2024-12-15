type UserRole = "ADMIN" | "USER";

export interface userType {
  id: string;
  name: string ;

  email: string ;

  emailVerified?: Date ;

  image: string ;

  blog: string;

  accounts: string;

  role?: string;
  createdAt: Date;
  updatedAt: Date;
}
