"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

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
export const getSingleBlog = async ({ blogId }: { blogId: string }) => {
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
  const session = await auth();
  try {
    const content = {
      title: (formData.get("title") as string)?.trim(),
      description: (formData.get("description") as string)?.trim(),
      link: (formData.get("link") as string)?.trim(),
      tag: (formData.get("tag") as string)?.trim(),
      userId: session?.user.id as string,
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
export const editBlog = async ({
  id,
  data,
}: {
  id: string;
  data: { title?: string; description?: string; link?: string; tag?: string };
}) => {
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: id,
      },
    });
    if (!blog) {
      throw new Error("Blog post not found");
    }

    const updatedBlog = await prisma.blog.update({
      where: {
        id: id,
      },

      data: {
        ...data,
      },
    });

    return updatedBlog;
  } catch (error) {
    console.error("Error on editing blog => ", error);
    throw new Error("Failed to edit blog");
  }
};

// delete blog
export const deleteBlog = async ({ id }: { id: string }) => {
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
