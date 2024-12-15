'use client'
import React from "react";
import Input from "./Input";
import { BookMarked } from "lucide-react";
import { saveBlog } from "@/actions/blog";
import toast from "react-hot-toast";
type SaveProps = {
  blogId: string;
  userId: string | undefined;
};
const SaveBtn = ({ blogId, userId }: SaveProps) => {

  const notify = () =>
    toast.success("Successfully Saved!");

  return (
    <>
      <form action={saveBlog}>
        <Input type="hidden" name="blogId" value={blogId} required />
        <Input type="hidden" name="userId" value={userId} required />
        <button type="submit" onClick={notify} className="">
          <BookMarked className="text-orange-600" />
        </button>
      </form>
    </>
  );
};

export default SaveBtn;
