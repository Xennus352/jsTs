"use client";

import { useRouter } from "next/navigation";
import React from "react";

const EditBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleUpdate =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      
      
      router.push("/blog/update/" + id);
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
