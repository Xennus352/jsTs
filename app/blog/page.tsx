
import SearchHeader from "@/components/SearchHeader";
import React from "react";

const blog = () => {
  return (
    <div>
      <div>
        <header className="text-center text-2xl text-orange-600 text-bold p-6 italic">
          <p>Here You can Search with Hashtag</p>
        </header>

        {/* search header  */}
        <SearchHeader />
        {/* result category card   */}
        {/* render in single card  */}
        {/* <SingleCard /> */}
      </div>
    </div>
  );
};

export default blog;
