import React from "react";

const blog = () => {
  return (
    <div>
      <div>
        <header className="text-center underline m-2">
          <p>Here You can Search </p>
        </header>

        {/* search header  */}
        <div className="flex justify-center items-center">
          <form action="" className="flex gap-1">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full  max-w-xl"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-outline btn-primary"
            />
          </form>
        </div>

        {/* result category card   */}

        <div>some thing... search result</div>
      </div>
    </div>
  );
};

export default blog;
