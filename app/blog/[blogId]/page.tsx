import { getSingleBlog } from "@/actions/blog";
import BlogDetail from "@/components/BlogDetail";
import React from "react";

const page = async ({params}: {params:{blogId:string}}) => {
  const {blogId} =  params
const blog = await getSingleBlog(blogId)
  return (
    <>
      <div className=" border border-green-500 mb-5 rounded-md">
        <BlogDetail blog={blog} />
      </div>
    </>
  );
};

export default page;
