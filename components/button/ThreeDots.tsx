import { Ellipsis } from "lucide-react";
import React from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

type DotProps = {
  id: string;
};

const ThreeDots = ({ id }: DotProps) => {
  return (
    <div>
      <ul className="menu  rounded-box ">
        <li className="relative">
          <details>
            <summary>
              {" "}
              <Ellipsis />
            </summary>
            <ul className="absolute right-5  m-2">
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
