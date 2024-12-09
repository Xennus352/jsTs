"use client";
import { deleteBlog, editBlog } from "@/actions/blog";
import React from "react";

import { useRouter } from "next/navigation";

const EditBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await editBlog({
        id:id,
        data: {
          title: "New Blog Title",
            description:"",
            link:"",
            tag:""
        },
      });
      router.refresh();
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="submit"
        value="Update"
        className="hover:cursor-pointer"
        name="update"
      />
    </form>
  );
};

export default EditBtn;
