"use client";
import { login } from "@/actions/auth";
import { GithubIcon } from "lucide-react";
import React from "react";

const LoginGithub = () => {
  return (
    <div
      className="btn btn-success btn-outline uppercase btn-primary"
      onClick={() => {
        login("github");
      }}
    >
      <GithubIcon /> Login Github
    </div>
  );
};

export default LoginGithub;
