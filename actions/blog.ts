"use server";

import { prisma } from "@/prisma";
import { getCurrentUser } from "./user";
import { redirect } from "next/navigation";

// fetch all blogs
export const getAllBlogs = async () => {
  try {
    const blogs = prisma.blog.findMany({
      include: {
        User: true,
      },
    });
    return blogs;
  } catch (error) {
    console.log("Error on fetching blog => ", error);
    throw new Error("Failed to fetch blog");
  }
};

// fetch single blog
export const getSingleBlog = async (blogId: string) => {
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: blogId,
      },
      include: {
        User: true,
      },
    });

    return blog;
  } catch (error) {
    console.log("Error on fetching blog => ", error);
    throw new Error("Failed to fetch blog");
  }
};

// new blog creating
export const createBlog = async (formData: FormData) => {
  const currentUser = await getCurrentUser();

  try {
    const content = {
      title: (formData.get("title") as string)?.trim(),
      description: (formData.get("description") as string)?.trim(),
      link: (formData.get("link") as string)?.trim(),
      tag: (formData.get("tag") as string)?.trim(),
      userId: currentUser?.id as string,
    };

    if (
      !content.title ||
      !content.description ||
      !content.link ||
      !content.tag
    ) {
      throw new Error("All fields are required.");
    }

    await prisma.blog.create({
      data: content,
    });
    
  } catch (error) {
    console.error("Error on creating blog => ", error);
    throw new Error("Failed to create blog");
  }
};

// edit blog
export const editBlog = async (data: FormData) => {
  try {
    const content = {
      id: data.get("id") as string,
      title: data.get("title") as string,
      description: data.get("description") as string,
      link: data.get("link") as string,
      tag: data.get("tag") as string,
    };
    const updateBlog = await prisma.blog.update({
      where: {
        id: content.id,
      },
      data: { ...content },
    });
  } catch (error) {
    console.error("Error on editing blog =>", error);
    throw new Error("Failed to edit blog");
  }
};

// delete blog
export const deleteBlog = async (id: string) => {
  try {
    const blog = prisma.blog.delete({
      where: {
        id: id,
      },
    });
    return blog;
  } catch (error) {
    console.error("Error on deleting blog => ", error);
    throw new Error("Failed to delete blog");
  }
};

// get blog by tag
export const getTag = async (searchTag: string) => {
  try {
    const tagB = await prisma.blog.findMany({
      where: {
        tag: searchTag,
      },
    });

    if (!tagB) {
      return null;
    }
    return tagB;
  } catch (error) {
    console.error("Error fetching tag:", error);
    throw new Error("Failed to fetch tag");
  }
};

// save blog
export const saveBlog = async (formData: FormData) => {
  try {
    const blogId = formData.get("blogId")?.toString() || "";
    const userId = formData.get("userId")?.toString() || "";

    const saveData = {
      blogId,
      userId,
    };

    await prisma.savePost.create({
      data: saveData,
    });
  } catch (error) {
    console.error("Error on saving blog => ", error);
    throw new Error("Failed to save blog");
  }
};

// get all save blogs
export const getSaveBlog = async (userId: string) => {
  if (!userId) {
    throw new Error("User  ID is required");
  }

  const savedBlogs = await prisma.savePost.findMany({
    where: {
      userId: userId,
    },

    include: {
      blog: true,
    },
  });

  return savedBlogs;
};

// delete save blogs
export const deleteSaveBlog = async (postId: string) => {
  try {
    await prisma.savePost.delete({
      where: {
        id: postId,
      },
    });

    console.log("save post deleted");
  } catch (error) {
    console.error("Error occurred while deleting the blog post:", error);
    throw new Error("Error occurred while deleting the blog post.");
  }
};
