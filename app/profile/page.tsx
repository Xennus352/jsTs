import { getSaveBlog } from "@/actions/blog";
import { getCurrentUser } from "@/actions/user";
import Logout from "@/components/Logout";
import { ProfileCard } from "@/components/ProfileCard";
import SaveCard from "@/components/SaveCard";
import Link from "next/link";
import React from "react";

const page = async () => {
  const currentUser = await getCurrentUser();
  const userId = currentUser?.id as string;
  const saveBlog = await getSaveBlog(userId);
  return (
    <div className=" h-screen">
      <div className="flex items-center  text-green-700">
        {/* headder  */}
        {currentUser?.role == "ADMIN" && (
          <div className="flex items-center gap-3">
            <Link href="/blog/create" className=" ">
              <div className="text-md m-2 btn btn-sm hover:cursor-pointer hover:text-orange-600 ">
                {/* <Pickaxe /> */}
                Create Blog
              </div>
            </Link>

            {/* <Link href="/dashboard" className=" ">
              <div className="text-md btn btn-sm m-2 hover:cursor-pointer hover:text-orange-600">
                Dashboard
              </div>
            </Link> */}
          </div>
        )}
        <Logout />
      </div>
      {/* Bio contact  */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="uppercase font-semibold text-2xl text-orange-600 italic">
          profile
        </h2>
        {currentUser && <ProfileCard currentUser={currentUser} />}
      </div>

      {/* save blogs  */}
      <div className=" m-2 overflow-y-scroll grid gap-3">
        <h2 className=" text-xl uppercase font-semibold m-3 text-center">
          save posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 place-items-center place-content-between w-full gap-3 ">
          {saveBlog.map((save) => {
            return (
              <SaveCard
                key={save.id}
                id={save.id}
                title={save.blog.title}
                text={save.blog.description}
                tag={save.blog.tag}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
