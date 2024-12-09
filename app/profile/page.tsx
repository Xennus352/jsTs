import { getSaveBlog } from "@/actions/blog";
import { auth } from "@/auth";
import LogoutBtn from "@/components/button/LogoutBtn";
import ProfileCard from "@/components/card/ProfileCard";
import SaveCard from "@/components/card/SaveCard";
import { Pickaxe } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = async () => {
  const session = await auth();
  const userId = session?.user?.id as string;
  const saveBlog = await getSaveBlog(userId);

  return (
    <div>
      <div className="flex flex-col  h-screen">
        {/* headder  */}
        <div className="flex justify-between m-2 items-center">
          {session?.user.role == "ADMIN" && (
            <div className="flex items-center gap-3">
              <Link href="/blog/create" className=" ">
                <div className="btn btn-primary btn-outline m-2 flex items-center gap-1 ">
                  <Pickaxe />
                  Create
                </div>
              </Link>

              <Link href="/dashboard" className=" ">
                <div className="btn btn-primary btn-outline m-2 flex  items-center gap-1">
                  <Pickaxe />
                  Dashboard
                </div>
              </Link>
            </div>
          )}
          <LogoutBtn />
        </div>
        {/* bio contact */}
        <div className="flex flex-col items-center justify-center ">
          <h2 className="uppercase font-semibold underline">Profile</h2>
          {session && <ProfileCard session={session} />}
        </div>

        {/* save posts */}
        <div className="  m-2 grid gap-4">
          <h2 className=" text-xl uppercase font-semibold m-3 ">save posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 place-items-center place-content-between w-full gap-3 ">
            {saveBlog.map((save) => {
              return (
                <SaveCard
                  key={save.id}
                  id={save.blogId}
                  title={save.blog.title}
                  tag={save.blog.tag}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
