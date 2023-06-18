
import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import Singlecard from "./Singlecard";


const OnProgressContainer = () => {
  return (
    <div>
    <div className="todoContainer w-80 min-h-screen rounded-lg mx-4 bg-zinc-100">
      <div className="todowrapper  rounded-lg">
        <div className="flex justify-between items-center bg-pink5">
          <h5 className="flex items-center py-3">
            <span className="text-orange-400 mx-2 text-xl font-extrabold">
              <RxDotFilled />
            </span>
           On Progress{" "}
            <span className=" py-0 px-1.5 rounded-full bg-gray-300 mx-2">
              3
            </span>
          </h5>
          {/* <p className="mr-2 p-0.5 rounded bg-indigo-200 text-orange-400 text-md">
            <MdOutlineAddBox />
          </p> */}
        </div>
        <p className="text-orange-400 w-4/5 inline-block text-center font-bold mt-4 border-b-4 border-orange-400" />

        <div className="todo box mx-4 ">
            {/* <Singlecard/> */}
        </div>
      </div>
    </div>
</div>
  )
}

export default OnProgressContainer