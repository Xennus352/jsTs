import { createBlog } from "@/actions/blog";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

const create = async () => {
  return (
    <>
      <h2 className="text-center m-2 text-2xl uppercase italic font-bold text-orange-600">
        Blog Create
      </h2>

      <form action={createBlog}>
        <div
          className="grid grid-cols-1 place-content-center place-items-center
        p-3 mx-auto gap-4"
        >
          <div className="">
            <Input type="text" placeHolder="Title" name="title" required />

            <textarea
              className="textarea textarea-ghost text-lg focus:outline-none focus:border-t-0 focus:border-x-0 w-full"
              name="description"
              required
              rows={5}
              placeholder="Description"
            ></textarea>

            <Input type="text" placeHolder="Link" name="link" required />

            <Input type="text" placeHolder="Tags" name="tag" required />
          </div>

          <Button title="Create Blog" btnType={"submit"} />
        </div>
      </form>
    </>
  );
};

export default create;
