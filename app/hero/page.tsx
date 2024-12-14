import LoginFacebook from "@/components/LoginFaceBook";
import LoginGithub from "@/components/LoginGithub";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 items-center h-screen ">
        <div className=" flex flex-col items-center">
          <p className="text-xl font-semibold text-orange-700">
            Everyday New Learning With Us
          </p>
          <p className="text-2xl font-bold text-orange-700">Programming Blog</p>
        </div>
        <div className="flex-wrap flex-col flex gap-2">
          <LoginGithub />
          <LoginFacebook />
        </div>
      </div>
    </>
  );
};

export default page;
