import { Ellipsis } from "lucide-react";
import React from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const ThreeDots = ({ id }: { id: string }) => {
  return (
    <div>
      <ul className="menu  rounded-box ">
        <li className="relative">
          <details>
            <summary>
              {" "}
              <Ellipsis />
            </summary>
            <ul className="absolute right-2 m-2 bg-indigo-950  p-5 rounded-md">
              <li>
                <EditBtn id={id} />
              </li>
              <li>
                <DeleteBtn id={id} />
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default ThreeDots;
