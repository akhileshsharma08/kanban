import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import Singlecard from "./Singlecard";

const CreationTodoContainer = () => {
  const [modal, setmodal] = useState(false);
  const [title, settitle] = useState("");
  const [work, setwork] = useState("");
  const [type, settype] = useState("");

  const handleModal = () => {
    console.log("modal called");
  };
  const handletodo = (e) => {
    e.preventDefault();
    console.log(title, work, type, "todo data");
    setmodal(false);
  };
  const handleCloseModal=()=>{
    setmodal(false)
  }
  return (
    <>
     <div>
      <div className="todoContainer w-80 min-h-screen rounded-lg mx-4 bg-zinc-100">
        <div className="todowrapper  rounded-lg">
          <div className="flex justify-between items-center bg-pink5">
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
          <p className="text-indigo-700 w-4/5 inline-block text-center font-bold mt-4 border-b-4 border-indigo-700" />

          <div className="todo box mx-4 ">
            <Singlecard className="mt-4" />
          </div>
        </div>
      </div>
    </div>
      {/* -------------------- modal ---------------- */}
    
      {/* -------------------- modal end ---------------- */}
    </>
   
  );
};

export default CreationTodoContainer;
