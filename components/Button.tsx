
import React from "react";

type dataProps = {
  title: string;
  btnType: string;

};

const Button =  ({ title, btnType ,  }: dataProps) => {
  return (
    <>
      <input
        type={btnType}
        value={title}
        
        className="btn text-green-600 w-full
             max-w-xs lg:max-w-screen-md lg:col-span-2"
      />
    </>
  );
};

export default Button;
