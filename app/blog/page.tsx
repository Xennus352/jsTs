"use client";
import SingleCard from "@/components/SingleCard";
import React from "react";

const blog = () => {
  return (
    <div>
      <div>
        <header className="text-center text-2xl text-orange-600 text-bold p-6 italic">
          <p>Here You can Search with Hashtag</p>
        </header>

        {/* search header  */}
        <div className="flex justify-center items-center">
          <form className="flex gap-1">
            <input
              type="text"
              name="tag"
              placeholder="Type here"
              className="input input-bordered input-ghost w-full"
            />
            <input
              type="submit"
              value="Search"
              className="btn text-green-600"
            />
          </form>
        </div>

        {/* result category card   */}
        {/* render in single card  */}
        <SingleCard />
        {/* <div>some thing... search result</div> */}
      </div>
    </div>
  );
};

export default blog;
