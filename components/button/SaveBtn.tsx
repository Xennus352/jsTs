
import { BookMarked } from "lucide-react";
import React from "react";
import Input from "../input/Input";
import { saveBlog } from "@/actions/blog";


type SaveProps = {
  blogId: string;
  userId: string | undefined;
};

const SaveBtn =  ({ blogId, userId }: SaveProps) => {
    return (
    <>
      <form action={saveBlog}>
        <Input
          type="hidden"
          name="blogId"
          value={blogId}
          
          required
        />

        <Input
          type="hidden"
          name="userId"
          value={userId}
         
          required
        />

        <button type="submit" className="btn m-2 btn-primary btn-outline">
          <BookMarked />
        </button>
      </form>
    </>
  );
};

export default SaveBtn;
