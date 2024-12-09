import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import next from "@/public/next.svg";

import { getUser } from "@/actions/user";
import { auth } from "@/auth";

import SaveBtn from "../button/SaveBtn";
import ThreeDots from "../button/ThreeDots";

type blogProps = {
  id: string;
  title: string;
  description: string;
  link: string;
  tag: string;
  time: Date;
  userId: string | undefined;
};

const SingleCard = async ({
  id,
  title,
  description,
  link,
  time,
  tag,
  userId,
}: blogProps) => {
  const session = await auth();

  const user = await getUser({ userId });

 

  const words = description.split(" ");
  const hasMoreThan50Words = words.length > 50;
  const truncatedDescription =
    words.slice(0, 50).join(" ") + " " + "see more ...";

  return (
    <div className=" border m-2 p-2 bg-slate-800 rounded-md">
      <div className={`flex justify-between items-center`}>
        {/* avata and date  */}

        <div className="avatar flex justify-start  gap-4">
          <div className="rounded-full w-full object-cover h-20 ">
            <Image
              alt="user photo"
              height={50}
              width={50}
              src={user?.image || next}
            />
          </div>
          <div className="w-full">
            <p>{user?.name}</p>
            <p>{time.toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex  items-center gap-3 m-2 ">
          <SaveBtn blogId={id} userId={session?.user?.id} />
          <div className={` ${session?.user?.role === "USER" && "hidden"} `}>
            <ThreeDots id={id} />
          </div>
        </div>
      </div>

      <div className="divider divider-primary ">
        {/* card title  */}
        <p className="p-2 text-2xl space-x-3 font-semibold">{title}</p>
      </div>
      {/* card body  */}

      <p className="p-2 cursor-pointer hover:text-zinc-400 text-xl duration-150">
        <Link href={`/blog/${id}`}>
          {hasMoreThan50Words ? truncatedDescription : description}
        </Link>
      </p>

      <Link
        href={`${link}`}
        className=" text-xl space-x-2 text-info  hover:cursor-pointer m-2"
      >
        {" "}
        {link}
      </Link>
      <div className=" flex justify-end ">
        {/* tags  */}
        <div className="border rounded-md w-fit text-white m-2 p-2">
          <p className="flex items-center">
            {" "}
            Tags :<ChevronRightIcon /> {tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
