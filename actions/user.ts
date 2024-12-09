"use server";

import { prisma } from "@/lib/prisma";

// fetch all users 
export const getAllUsers = async () => {
  try {
    const users = prisma.user.findMany();
    return users;
  } catch (error) {
    console.log("Error on fetching user => ", error);
    throw new Error("Failed to fetch users");
  }
};

// fetch single user
export const getUser = async ({ userId }: { userId: string }) => {
  try {
    
    const user = await prisma.user.findFirst({
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
