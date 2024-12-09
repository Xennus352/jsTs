"use server";
import React from "react";

type dataProps = {
  title: string;
  btnType: string;
};

const Button = async ({ title, btnType }: dataProps) => {
  return (
    <>
      <input
        type={btnType}
        value={title}
        className="btn btn-primary btn-outline w-full
             max-w-xs lg:max-w-screen-md lg:col-span-2"
      />
    </>
  );
};

export default Button;
