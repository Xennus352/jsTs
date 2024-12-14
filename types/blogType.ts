import { userType } from "./userType";

export type blogType = {
  id: string;

  title: string;

  description: string;

  link: string;

  tag: string;

  updatedAt: Date;

  userId:string ;
  User?:userType
};
