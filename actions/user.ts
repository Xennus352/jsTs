"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";

// get current user session
export async function getSession() {
  return await auth();
}

// get current user
export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString || null,
    };
  } catch (error) {
    console.log(" fetching current user errr", error);
  }
}

// get user with id
export const getUser = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    console.log("Error on fetching user => ", error);
    throw new Error("Failed to fetch user");
  }
};

// get all user 
export const getAllUsers = async () => {
  try {
    const users = prisma.user.findMany();
    return users;
  } catch (error) {
    console.log("Error on fetching user => ", error);
    throw new Error("Failed to fetch users");
  }
};