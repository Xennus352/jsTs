import Image from 'next/image'
import React from 'react'
import next from "@/public/next.svg"
import { userType } from '@/types/userType'

export const ProfileCard = ({currentUser}: {currentUser: userType}) => {
  return (
    <>
    <div className="m-3 max-w-sm">
        <div className=" px-4 pt-8 pb-10 ">
          <div className="relative mx-auto w-36 rounded-full">
            <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
            <Image
              width={50}
              height={50}
              className="mx-auto h-auto w-full rounded-full"
              src={currentUser?.image || next}
              alt="user photo"
            />
          </div>
          <h1 className="my-1 text-center text-xl font-bold leading-8 text-snow">
            {currentUser?.name}
          </h1>
          <h1 className="text-snow">{currentUser?.email}</h1>
        </div>
      </div>
    
    </>
  )
}
