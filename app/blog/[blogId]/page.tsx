import { getSingleBlog } from "@/actions/blog";
import BlogDetail from "@/components/BlogDetail";
import React from "react";

type Params = Promise<{ id: string }>

const Page = async ({ params }: { params:Params }) => {
  const { id } = await params
   const blog = await getSingleBlog(id);
  return (
    <>
      <div className=" border border-green-500 mb-5 rounded-md">
        <BlogDetail blog={blog} />
        
      </div>
    </>
  );
};

export default Page;
