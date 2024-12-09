'use client'
import { logout } from "@/actions/auth-action";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

const LogoutBtn = () => {
 
  const router = useRouter()
  return (
    <div
      onClick={ () => { 
        logout().then(() => { router.push('/hero') })
       }}
      className="btn btn-primary btn-outline m-2 flex items-center gap-3"
    >
      <div>
        <LogOut />
      </div>
      <div>Logout</div>
    </div>
  );
};

export default LogoutBtn;
