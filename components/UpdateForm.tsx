"use client";

import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { editBlog } from "@/actions/blog";

const UpdateForm = ({ editId }: { editId: string }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    tag: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch the blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/update/${editId}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setFormData({
          title: data.title || "",
          description: data.description || "",
          link: data.link || "",
          tag: data.tag || "",
        });
      } catch (err: any) {
        setError(err.message);
      }
    };

    if (editId) fetchBlog();
  }, [editId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await editBlog(editId, formData);
      alert("Blog updated successfully!");
    } catch (err: any) {
      setError("Failed to update the blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="grid grid-cols-1 place-content-center place-items-center
        p-3 mx-auto gap-4"
        >
          <div className="">
            <Input
              type="text"
              placeHolder="Title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
            />

            <textarea
              className="textarea textarea-ghost text-lg focus:outline-none focus:border-t-0 focus:border-x-0 w-full"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            ></textarea>

            <Input
              type="text"
              placeHolder="Link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
            />

            <Input
              type="text"
              placeHolder="Tags"
              value={formData.tag}
              onChange={handleChange}
              name="tag"
              required
            />
          </div>

          <Button title="Create Blog" btnType={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
