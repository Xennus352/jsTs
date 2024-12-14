import React from "react";
import Input from "./Input";
import { BookMarked } from "lucide-react";
import { saveBlog } from "@/actions/blog";
type SaveProps = {
  blogId: string;
  userId: string | undefined;
};
const SaveBtn = ({ blogId, userId }: SaveProps) => {
  return (
    <>
      <form action={saveBlog}>
        <Input type="hidden" name="blogId" value={blogId} required />
        <Input type="hidden" name="userId" value={userId} required />
        <button type="submit" className="">
          <BookMarked className="text-orange-600" />
        </button>
      </form>
    </>
  );
};

export default SaveBtn;
