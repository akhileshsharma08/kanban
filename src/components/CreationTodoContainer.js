import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import Singlecard from "./Singlecard";
import cardDetails from "./cardData";
import { Droppable } from "react-beautiful-dnd";

const CreationTodoContainer = (task, settask, completed, setCompleted) => {
  const [modal, setmodal] = useState(false);
  const [title, settitle] = useState("");
  const [work, setwork] = useState("");
  const [type, settype] = useState("");

  console.log(task, "task");

  const handleModal = () => {
    console.log("modal called");
  };
  const handletodo = (e) => {
    e.preventDefault();
    console.log(title, work, type, "todo data");
    setmodal(false);
  };
  const handleCloseModal = () => {
    setmodal(false);
  };
  return (
    <>
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div
              className={`todoContainer md:w-80   rounded-lg bg-zinc-100 overflow-hidden mx-2 pb-6 `}
            >
              {/* card heading  start */}
              <div className="   ">
                <div className="heading flex justify-between items-center">
                  <h5 className="flex items-center py-3">
                    <span className="text-indigo-700 mx-2 text-xl font-extrabold">
                      <RxDotFilled />
                    </span>
                    To Do{" "}
                    <span className=" py-0 px-1.5 rounded-full bg-gray-300 mx-2">
                      4
                    </span>
                  </h5>
                  <p className="mr-2 p-0.5 rounded bg-indigo-200 text-indigo-700 text-md">
                    <MdOutlineAddBox onClick={handleModal} />
                  </p>
                </div>

                <p className="text-indigo-700 w-full  text-center font-bold mt-4 border-b-4 border-indigo-700" />
              </div>
              {/* card heading  end */}

              <div className="todowrapper  rounded-lg scroll-smooth overflow-y-auto h-96 ">
                <div className="todo box mx-4 ">
                  {cardDetails.map((item, index) => (
                    <>
                      <Singlecard item={item} key={item.id} index={index} />
                    </>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            </div>
          </div>
        )}
      </Droppable>

      {/* -------------------- modal ---------------- */}

      {/* -------------------- modal end ---------------- */}
    </>
  );
};

export default CreationTodoContainer;
