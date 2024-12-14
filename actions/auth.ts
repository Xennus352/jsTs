"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export async function login(provider: string) {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
}

export async function logout() {
  await signOut({ redirectTo: "/hero" });
  revalidatePath("/hero");
}
