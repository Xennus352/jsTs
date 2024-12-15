"use client";
import { createBlog } from "@/actions/blog";
import Button from "@/components/Button";
import Input from "@/components/Input";

import React, { useState } from "react";
import toast from "react-hot-toast";

const create = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    tag: "",
  });
  const notify = toast.success("Successfully created!");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("link", formData.link);
      form.append("tag", formData.tag);

      await createBlog(form);
   
      window.location.href = "/";
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <>
      <h2 className="text-center m-2 text-2xl uppercase italic font-bold text-orange-600">
        Blog Create
      </h2>

      <form onSubmit={handleSubmit}>
        <div
          className="grid grid-cols-1 place-content-center place-items-center
        p-3 mx-auto gap-4"
        >
          <div className="">
            <Input
              type="text"
              placeHolder="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              name="title"
              required
            />

            <textarea
              className="textarea textarea-ghost text-lg focus:outline-none focus:border-t-0 focus:border-x-0 w-full"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Description"
            ></textarea>

            <Input
              type="text"
              placeHolder="Link"
              name="link"
              value={formData.link}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
              required
            />

            <Input
              type="text"
              placeHolder="Tags"
              name="tag"
              value={formData.tag}
              onChange={(e) =>
                setFormData({ ...formData, tag: e.target.value })
              }
              required
            />
          </div>

          <Button title="Create Blog" btnType={"submit"} />
        </div>
      </form>
    </>
  );
};

export default create;
