import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import next from "@/public/next.svg"
import Category from "@/components/Category";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <h2 className="text-center m-3 text-xl font-bold underline ">
        New Feeds
      </h2>
      <header className="flex items-center justify-around">
        <div className=" flex items-center gap-4 rounded-full">
          <Image
            width={50}
            height={50}
            className="mx-auto h-auto w-full rounded-full"
            src={session?.user?.image || next}
            alt="user photo"
          />
          <span className=" text-xl">{session?.user?.name}</span>
        </div>

        <Link href="/blog/create" className=" ">
          <div className="btn btn-primary btn-outline m-2 flex items-center gap-1 ">
            Create new blog
          </div>
        </Link>
      </header>
      <div className=" divider shadow-md h-10"></div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mb-20">
       
        <Category />
      </div>
    </>
  );
}
