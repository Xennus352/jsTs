"use client";

import { usePathname } from "next/navigation";
import React from "react";
import UpdateForm from "@/components/UpdateForm";

const EditBlog = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop() as string;

  return (
    <>
      <h2 className="text-center m-2 text-2xl uppercase italic font-bold text-orange-600">
        Blog Update
      </h2>
      <UpdateForm editId={id} />
    </>
  );
};

export default EditBlog;
