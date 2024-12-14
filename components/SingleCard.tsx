import Image from "next/image";
import React from "react";
import next from "@/public/next.svg";
import { getCurrentUser, getUser } from "@/actions/user";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import SaveBtn from "./SaveBtn";
import ThreeDots from "./ThreeDots";

type blogProps = {
  id: string;
  title: string;
  description: string;
  link: string;
  tag: string;
  time: Date;
  userId: string;
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
  const currentUser = await getCurrentUser();

  //   get author
  const user = await getUser(userId);

  //   words break
  const words = description.split(" ");
  const hasMoreThan30Words = words.length > 30;
  const truncatedDescription =
    words.slice(0, 30).join(" ") + " " + "see more ...";

  return (
    <div className="border rounded-md border-green-800 px-4">
      <div className="shadow-xl rounded-md">
        <div className="flex justify-between items-center p-4">
          {/* Avatar and User Info  */}
          <div className="flex items-center gap-4">
            <div className=" w-12 h-12 rounded-full overflow-hidden hidden sm:hidden md:block lg:block xl:block">
              <Image
                alt="user"
                height={48}
                width={48}
                src={user?.image || next}
                className=" object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-medium text-green-700">{user?.name}</p>
              <p className="text-sm text-green-700">
                {time.toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Save Button and Options  */}
          <div className="flex items-center gap-2">
            <SaveBtn blogId={id} userId={currentUser?.id} />
            {currentUser?.role === "ADMIN" && (
              <div>
                <ThreeDots id={id} />
              </div>
            )}
          </div>
        </div>
        {/* description and link  */}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-green-700 mb-4">{title}</h2>
          <p className="text-base text-green-700 break-words mb-6 text-justify">
            <Link href={`/blog/${id}`}>
              {hasMoreThan30Words ? truncatedDescription : description}
            </Link>
          </p>
          {/* External Link */}
          <Link
            href={`${link}`}
            className="text-base text-orange-700 hover:text-blue-800 underline"
          >
            {link}
          </Link>
          <div className="mt-4 flex justify-end">
            <div className="rounded-md px-4 py-2 text-sm text-orange-600 flex items-center gap-2">
              <span>Tags:</span> <ChevronRightIcon className="w-5 h-5" /> {tag}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
