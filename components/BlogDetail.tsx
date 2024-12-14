import { getCurrentUser } from "@/actions/user";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import SaveBtn from "./SaveBtn";
import ThreeDots from "./ThreeDots";
import Image from "next/image";
import next from "@/public/next.svg";
import { blogType } from "@/types/blogType";

const BlogDetail = async ({ blog }: { blog: blogType }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className=" p-5">
      <div className={`flex justify-between items-center`}>
        {/* avata and date  */}

        <div className=" flex items-center gap-3">
          <div className="rounded-full w-full object-cover h-auto hidden sm:hidden md:block lg:block xl:block">
            <Image
              className="rounded-full"
              alt="user photo"
              height={60}
              width={60}
              src={blog.User?.image || next}
            />
          </div>
          <div className="w-full text-green-700 text-lg">
            <div>{blog.User?.name}</div>
            <div>{blog.updatedAt.toLocaleDateString()}</div>
          </div>
        </div>
        <div className={` flex items-center gap-3 m-2  `}>
          <SaveBtn blogId={blog.id} userId={blog?.userId} />
          <div className={`${currentUser?.role === "USER" && "hidden"}`}>
            <ThreeDots id={blog.id} />
          </div>
        </div>
      </div>

      {/* card title  */}
      <p className="p-2 text-green-600 text-lg font-semibold">{blog.title}</p>
      {/* card body  */}

      <p className="p-2 cursor-pointer text-green-600 duration-150 text-justify">
        {blog.description}
      </p>

      <Link
        href={`${blog.link}`}
        className="underline text-info  hover:cursor-pointer m-2"
      >
        {" "}
        {blog.link}
      </Link>
      <div className=" flex justify-end ">
        {/* tags  */}
        <div className="rounded-md px-4 py-2 text-sm text-orange-600 flex items-center gap-2">
          <p className="flex items-center">
            {" "}
            Tags :<ChevronRightIcon /> {blog.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
