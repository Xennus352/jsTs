"use client";
import { login } from "@/actions/auth";
import { FacebookIcon } from "lucide-react";
import React from "react";

const LoginFacebook = () => {
  return (
    <div
      className="btn btn-success btn-outline uppercase btn-primary"
      onClick={() => {
        login("facebook");
      }}
    >
      <FacebookIcon /> Login FaceBook
    </div>
  );
};

export default LoginFacebook;
