import { getCurrentUser } from "@/actions/user";

import Image from "next/image";
import next from "@/public/next.svg";
import Link from "next/link";
import Category from "@/components/Category";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <header className="flex items-center justify-around placeholder-opacity-30">
        <div className="flex items-center gap-4 rounded-full text-green-600">
          <Image
            width={40}
            height={40}
            className="mx-auto h-auto w-full rounded-full"
            src={currentUser?.image || next}
            alt="User"
          />
          <span className="text-xl">{currentUser?.name}</span>
        </div>
        <Link
          href="/blog/create"
          className={`${currentUser?.role == "USER" && "hidden"}`}
        >
          <div className="btn text-green-600 m-2 flex items-center-gap-1">
            Create Blog
          </div>
        </Link>
      </header>
      <div className="text-orange-600 text-2xl font-bold my-3 text-center uppercase italic">
        new feeds
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-5">
        <Category />
      </div>
    </>
  );
}
