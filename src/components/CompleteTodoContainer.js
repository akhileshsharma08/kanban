import React from 'react'

import { MdOutlineAddBox } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import {completedData} from './projects'
import CompletedSingle from './CompletedSingle';


const CompleteTodoContainer = () => {
  console.log(completedData,"kk")
  return (
    <div>
    <div className="todoContainer w-80 rounded-lg mx-2 pb-6 bg-zinc-100" style={{minHeight:"500px"}}>
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
        <p className="text-green-500 w-full inline-block text-center font-bold mt-4 border-b-4 border-green-500" />

        <div className="todo box mx-4 ">
          {completedData.map((item,index)=>{
            return(
              <div key={item.id}>
            <CompletedSingle item={item}  index={index} />
            </div>
            )
            
})}
        </div>
      </div>
    </div>
</div>
  )
}

export default CompleteTodoContainer