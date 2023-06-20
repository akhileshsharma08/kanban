import React from "react";

import { MdOutlineAddBox } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import { completedData } from "./projects";
import CompletedSingle from "./CompletedSingle";
import { Droppable } from "react-beautiful-dnd";

const CompleteTodoContainer = () => {
  return (
    <>
      <Droppable droppableId="doneTodosList">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div
              className={`todoContainer w-80   rounded-lg bg-zinc-100 overflow-hidden mx-2 pb-6 `}
            >
              {/* card heading  start */}
              <div className="   ">
                <div className="heading flex justify-between items-center">
                  <h5 className="flex items-center py-3">
                    <span className="text-green-500 mx-2 text-xl font-extrabold">
                      <RxDotFilled />
                    </span>
                    Done{" "}
                    <span className=" py-0 px-1.5 rounded-full bg-gray-300 mx-2">
                      2
                    </span>
                  </h5>
                  <p className="mr-2 p-0.5 rounded bg-indigo-200 text-green-500 text-md">
                  </p>
                </div>

                <p className="text-green-500 w-full  text-center font-bold mt-4 border-b-4 border-green-500" />
              </div>
              {/* card heading  end */}
                <div className=" scroll-smooth overflow-y-auto h-96">
                  <div className="todo box mx-4 ">
                    {completedData.map((item, index) => (
                      <CompletedSingle item={item} key={item.id} index={index} />
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              </div>
            </div>
          
        )}
      </Droppable>
    </>
  );
};

export default CompleteTodoContainer;
