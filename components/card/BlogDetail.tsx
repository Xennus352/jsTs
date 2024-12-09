import { BookMarked, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import next from "@/public/next.svg";
import { auth } from "@/auth";
import { userType } from "@/types/userType";
import SaveBtn from "../button/SaveBtn";
import ThreeDots from "../button/ThreeDots";

type blogProps = {
  blog: {
    id: string;
    title: string;
    description: string;
    link: string;
    tag: string;
    userId: string;
    User: userType;
    updatedAt: Date;
  };
};

const BlogDetail = async ({ blog }: blogProps) => {
  const session = await auth();

  return (
    <div className=" ">
      <div className={`flex justify-between items-center`}>
        {/* avata and date  */}

        <div className="avatar flex justify-start  gap-4">
          <div className="rounded-full w-full object-cover h-20 ">
            <Image
              alt="user photo"
              height={50}
              width={50}
              src={blog.User?.image || next}
            />
          </div>
          <div className="w-full">
            <p>{blog.User?.name}</p>
            <p>{blog.updatedAt.toLocaleDateString()}</p>
          </div>
        </div>
        <div className={` flex  items-center gap-3 m-2  `}>
          <SaveBtn blogId={blog.id} userId={blog.userId} />
          <div className={`${session?.user?.role === "USER" && "hidden"}`}>
            <ThreeDots id={blog.id} />
          </div>
        </div>
      </div>

      <div className="divider divider-primary"></div>
      {/* card title  */}
      <p className="p-2">{blog.title}</p>
      {/* card body  */}

      <p className="p-2 cursor-pointer hover:text-zinc-400 duration-150">
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
        <div className="border rounded-md w-fit text-white m-2 p-2">
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
