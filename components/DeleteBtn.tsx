"use client";
import { deleteBlog } from "@/actions/blog";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const DeleteBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const notify = () =>
    toast.error("Successfully Deleted!");

  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await deleteBlog(id);
      notify();
      router.push("/");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input
        type="submit"
        value="Delete"
        className="cursor-pointer"
        name="delete"
      />
    </form>
  );
};

export default DeleteBtn;
