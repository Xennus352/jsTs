import { createBlog } from "@/actions/blog";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import React from "react";

const create = async () => {
  return (
    <>
      <h2 className="text-center text-2xl uppercase underline m-3">
        Blog Create
      </h2>

      <form action={createBlog}>
        <div
          className="grid grid-cols-1 place-content-center place-items-center gap-5
        p-3 mx-auto lg:grid-cols-2"
        >
          <Input type="text" placeHolder="Title" name="title" required />

          <textarea
            className="textarea textarea-primary  w-1/2"
            name="description"
            required
            placeholder="Description"
          ></textarea>

          <Input type="text" placeHolder="Link" name="link" required />

          <Input type="text" placeHolder="Tags" name="tag" required />

          <Button title="Create" btnType={"submit"} />
        </div>
      </form>
    </>
  );
};

export default create;
