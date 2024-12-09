"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const login = async () => {
  await signIn();

  revalidatePath("/");
};

export const logout = async () => {
  await signOut();

  revalidatePath("/hero");
};
