"use client";
import { logout } from "@/actions/auth";
import { LogInIcon } from "lucide-react";
import React from "react";

const Logout = () => {
  return (
    <div
      className="text-md m-2 btn btn-sm bg-red-700 hover:cursor-pointer hover:text-orange-600 "
      onClick={() => {
        logout();
      }}
    >
      <LogInIcon />
      Logout
    </div>
  );
};

export default Logout;
