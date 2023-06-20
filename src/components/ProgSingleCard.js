import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import flower from "../assets/flower.png";
import { HiOutlineFolder } from "react-icons/hi";
import { TbMessageDots } from "react-icons/tb";

import { Draggable } from "react-beautiful-dnd";

const ProgSingleCard = ({item,index}) => {
  return (
    <div>
    <Draggable draggableId={item.id.toString()} index={index} key={item.id.toString()} >
      {(provided) => (
        <div
          className="cradwrapper rounded-lg w-62  mt-4  bg-white"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="card p-2 shadow">
            <ul className="info flex justify-between items-center mx-2">
              <li className="bg-orange-100 text-orange-400 text-sm px-1.5 py-0.5 rounded capitalize">
              {item.type}
              </li>
              <li>
                <FiMoreHorizontal />
              </li>
            </ul>
            <div className="textofcard px-1">
              <h6 className="my-2 font-bold capitalize">{item.title}</h6>
              <img src={item.img} alt="user pics" width={'w-full'} height={40} className="my-2" />
            </div>
            <ul className="flex justify-around items-center my-2 text-gray-500">
                <li className="">
                  {" "}
                  <img src={item.users} alt="user pics" width={80} height={40} />
                </li>
                <li className="text-sm flex items-center">
                  {" "}
                  <span className="text-lg mr-0.5">
                    <TbMessageDots />
                  </span>{" "}
                  {item.comments} comments
                </li>
                <li className="flex items-center text-sm">
                  {" "}
                  <span className="text-lg mr-0.5">
                    <HiOutlineFolder />
                  </span>
                  {item.files} files
                </li>
              </ul>
          </div>
        </div>
      )}
    </Draggable>
  </div>
  )
}

export default ProgSingleCard