import { getSingleBlog } from "@/actions/blog";
import BlogDetail from "@/components/BlogDetail";
import React from "react";
type iParam = Promise<{blogId: string}>

const Page = async ({ params }:{params:iParam}) => {
  const { blogId } = await params ;
  const blog = await getSingleBlog(blogId);
  return (
    <>
      <div className=" border border-green-500 mb-5 rounded-md">
        <BlogDetail blog={blog} />
      </div>
    </>
  );
};

export default Page;
