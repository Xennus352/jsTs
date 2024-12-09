import React from "react";
import SingleCard from "./card/SingleCard";
import { getAllBlogs } from "@/actions/blog";
import { blogType } from "@/types/blogType";

const Category = async () => {
  const blogs = await getAllBlogs();

  return (
    <>
      {blogs
        .sort((a: blogType, b: blogType) => {
          const dateA = new Date(a.updatedAt).getTime();

          const dateB = new Date(b.updatedAt).getTime();

          return dateB - dateA; // Sort in descending order
        })
        .map((blog) => {
          const userId = blog.User?.id;

          return (
            <SingleCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              link={blog.link}
              time={blog.updatedAt}
              userId={userId}
              tag={blog.tag}
            />
          );
        })}
    </>
  );
};

export default Category;
