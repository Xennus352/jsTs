import React from "react";

type InputProps = {
  id?: string;
  placeHolder?: string;
  name: string;
  type: string;
  value?: string;
  required?: boolean;
};

const Input = ({ placeHolder, name, type, required, value }: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        required={required}
        defaultValue={value}
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </>
  );
};

export default Input;
