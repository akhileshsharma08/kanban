import React from 'react'

import { MdOutlineAddBox } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import Singlecard from "./Singlecard";


const CompleteTodoContainer = () => {
  return (
    <div>
    <div className="todoContainer w-80 min-h-screen rounded-lg mx-4 bg-zinc-100">
      <div className="todowrapper  rounded-lg">
        <div className="flex justify-between items-center bg-pink5">
          <h5 className="flex items-center py-3">
            <span className="text-green-500 mx-2 text-xl font-extrabold">
              <RxDotFilled />
            </span>
            Done{" "}
            <span className=" py-0 px-1.5 rounded-full bg-gray-300 mx-2">
              2
            </span>
          </h5>
          
        </div>
        <p className="text-green-500 w-4/5 inline-block text-center font-bold mt-4 border-b-4 border-green-500" />

        <div className="todo box mx-4 ">
            <Singlecard/>
        </div>
      </div>
    </div>
</div>
  )
}

export default CompleteTodoContainer