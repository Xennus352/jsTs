import { getSingleBlog } from "@/actions/blog";
import BlogDetail from "@/components/card/BlogDetail";
import React from "react";
type Params = {
  params: {
    blogId: string;
  };
} ;

const page = async ({ params }: Params) => {
  const { blogId } = await params;
  const blog = await getSingleBlog({ blogId });
  return (
    <>
      <div className=" border mb-20 p-2 rounded-md">
        <BlogDetail blog={blog} /> 
      </div>
    </>
  );
};

export default page;
