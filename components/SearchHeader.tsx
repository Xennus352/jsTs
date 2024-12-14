"use client";
import React from "react";
import { getTag } from "@/actions/blog";
import { useState } from "react";
import { blogType } from "@/types/blogType";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

const SearchHeader = () => {
  const [searchTag, setSearchTag] = useState("");
  const [result, setResult] = useState<blogType[]>();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const lower = searchTag.toLowerCase();
      const res = await getTag(lower)!;
      if (!res) {
        setResult([]);
        throw new Error("Failed to fetch tag");
      }

     setResult(res);
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSearch} className="flex gap-1">
          <input
            type="text"
            name="tag"
            placeholder="Type here"
            value={searchTag}
            onChange={(e) => setSearchTag(e.target.value)}
            className="input input-bordered input-ghost w-full"
          />
          <input type="submit" value="Search" className="btn text-green-600" />
        </form>
      </div>

      {result && (
        <div>
          {result.map((blog: blogType) => {
            return (
              <div
                className="border rounded-md m-5 border-green-800 px-4"
                key={blog.id}
              >
                {/* description and link  */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-green-700 mb-4">
                    {blog.title}
                  </h2>
                  <p className="text-base text-green-700 break-words mb-6 text-justify">
                    <Link href={`/blog/${blog.id}`}>{blog.description}</Link>
                  </p>
                  {/* External Link */}
                  <Link
                    href={`${blog.link}`}
                    className="text-base text-orange-700 hover:text-blue-800 underline"
                  >
                    {blog.link}
                  </Link>
                  <div className="mt-4 flex justify-end">
                    <div className="rounded-md px-4 py-2 text-sm text-orange-600 flex items-center gap-2">
                      <span>Tags:</span>{" "}
                      <ChevronRightIcon className="w-5 h-5" /> {blog.tag}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchHeader;
