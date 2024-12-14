'use client'
import { editBlog, getSingleBlog } from '@/actions/blog'
import Button from '@/components/Button'
import Input from '@/components/Input'
import React, { ChangeEvent, useState, useEffect } from 'react'

const Page = ({ params }: { params: { id: Promise<string> } }) => {
  const [blog, setBlog] = useState({
    title: '',
    description: '',
    link: '',
    tag: '',
  });

  const [id, setId] = useState<string | null>(null);

  // Wrap the async function in useEffect and make sure we await params.id correctly
  useEffect(() => {
    const fetchData = async () => {
      // Unwrap the promise for the id
      const resolvedId = await params.id;
      setId(resolvedId);

      // Fetch the blog data
      const Deblog = await getSingleBlog(resolvedId);
      if (Deblog) {
        setBlog({
          title: Deblog?.title || '',
          description: Deblog?.description || '',
          link: Deblog?.link || '',
          tag: Deblog?.tag || '',
        });
      }
    };

    fetchData();
  }, [params.id]); // The effect will run only when `params.id` changes

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (id) {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('title', blog.title);
        formData.append('description', blog.description);
        formData.append('link', blog.link);
        formData.append('tag', blog.tag);

        await editBlog(formData); // Call the editBlog function with the form data
        alert('Blog updated successfully!');
      }
    } catch (error) {
      console.error('Failed to update the blog:', error);
      alert('Error updating blog.');
    }
  };

  if (!id) return <div>Loading...</div>; // Render loading state while fetching data

  return (
    <>
      <h2 className="text-center m-2 text-2xl uppercase italic font-bold text-orange-600">
        Blog Update
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 place-content-center place-items-center p-3 mx-auto gap-4">
          <div>
            <Input
              type="hidden"
              name="id"
              value={id || ''}
              required
            />
            <Input
              type="text"
              placeHolder="Title"
              name="title"
              value={blog.title}
              onChange={handleChange}
              required
            />
            <textarea
              className="textarea textarea-ghost text-lg focus:outline-none focus:border-t-0 focus:border-x-0 w-full"
              name="description"
              value={blog.description}
              onChange={handleChange}
              rows={5}
              placeholder="Description"
              required
            />
            <Input
              type="text"
              placeHolder="Link"
              name="link"
              value={blog.link}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              placeHolder="Tags"
              name="tag"
              value={blog.tag}
              onChange={handleChange}
              required
            />
          </div>

          <Button title="Update Blog" btnType="submit" />
        </div>
      </form>
    </>
  );
};

export default Page;
