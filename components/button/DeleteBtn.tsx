"use client";
import { deleteBlog } from "@/actions/blog";
import React from "react";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ id }: { id: string }) => {
  const router = useRouter()
  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {
      await deleteBlog({ id }); 
     router.push('/')
    } catch (error) {
      console.error("Error deleting blog:", error);
    
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input type="submit" value="Delete" className="hover:cursor-pointer" name="delete" />
    </form>
  );
};

export default DeleteBtn;