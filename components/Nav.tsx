"use client";
import { ChartColumnStacked, CircleUserRound, Home } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className={`${path == "/hero" && "hidden"} ` }>
      <div className="flex btm-nav justify-between items-center p-2 bg-green-700 cursor-pointer rounded-t-lg">
        <div
          className={`flex flex-col items-center justify-center gap-1  ${
            path == "/" && "text-orange-700"
          }`}
          onClick={() => {
            router.push("/");
          }}
        >
          <Home /> HOME
        </div>

        <div
          className={` ${
            path == "/blog" && "text-orange-700"
          } flex flex-col items-center justify-center gap-1  `}
          onClick={() => {
            router.push("/blog");
          }}
        >
          <ChartColumnStacked /> CATEGORY
        </div>

        <div
          className={`flex flex-col items-center justify-center gap-1 ${
            path == "/profile" && "text-orange-700"
          }  `}
          onClick={() => {
            router.push("/profile");
          }}
        >
          <CircleUserRound /> PROFILE
        </div>
      </div>
    </div>
  );
};

export default Nav;
