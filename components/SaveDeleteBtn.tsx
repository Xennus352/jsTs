"use client";
import { deleteSaveBlog } from "@/actions/blog";
import { useRouter } from "next/navigation";
import React from "react";

const SaveDeleteBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await deleteSaveBlog(id);
      router.refresh();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  return (
    <form onSubmit={handleDelete}>
      <input
        type="submit"
        value="Delete"
        className="cursor-pointer text-center w-full m-1 p-1 rounded-xl hover:shadow-md text-white bg-red-700"
        name="delete"
      />
    </form>
  );
};

export default SaveDeleteBtn;
