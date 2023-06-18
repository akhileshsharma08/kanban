import React, { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Logo from "../assets/logo.png";
import { TbMessageDots } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { FiMoreHorizontal } from "react-icons/fi";
import { FcIdea } from "react-icons/fc";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="flex">
        <div
          className={`sidee h-screen  ${
            open ? "w-54" : "w-20"
          }  py-5  border-r-2 border-gray-300  duration-300 `}
        >
          <div className="logosec w-60 flex justify-between items-center   py-4 border-b-2 ">
            <div className="companyname flex justify-center items-center relative text-xl">
              <img
                src={Logo}
                alt="company logo"
                width={24}
                height={24}
                className="mx-2 items-center"
              />
              <h1 className={`${open ? "font-bold mx-4 " : "invisible"}`}>
                Project M.
              </h1>
              <div className="logoicon ml-5 z-10">
                <MdKeyboardDoubleArrowLeft
                  className={`${
                    open ? "absolute -right-9 top-1" : "absolute left-9 top-1"
                  } cursor-pointer`}
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
              </div>
            </div>
          </div>
          <ul
            className={` ${
              open ? "w-54" : "w-12 truncate duration-300"
            }  py-5    duration-300 `}
          >
            <li className="flex items-center py-1 text-lg pl-3 text-gray-900  hover:bg-indigo-700  hover:text-white  cursor-pointer">
              <span className="mr-6 text-2xl">
                <GrProjects />
              </span>{" "}
              Home
            </li>
            <li className="flex items-center py-1 text-lg pl-3 text-gray-900  hover:bg-indigo-700  hover:text-white  cursor-pointer">
              <span className="mr-6 text-2xl">
                <TbMessageDots />
              </span>{" "}
              Message
            </li>
            <li className="flex items-center py-1 text-lg pl-3 text-gray-900  hover:bg-indigo-700  hover:text-white  cursor-pointer">
              <span className="mr-6 text-2xl">
                <FaTasks />
              </span>{" "}
              Tasks
            </li>
            <li className="flex items-center py-1 text-lg pl-3 text-gray-900  hover:bg-indigo-700  hover:text-white  cursor-pointer">
              <span className="mr-6 text-2xl">
                <HiOutlineUsers />
              </span>{" "}
              Members
            </li>
            <li className="flex items-center py-1 text-lg pl-3 text-gray-900  hover:bg-indigo-700  hover:text-white  cursor-pointer">
              <span className="mr-6 text-2xl">
                <FiSettings />
              </span>{" "}
              Settings
            </li>
          </ul>
          <hr className="" />
          <div className="projectlist  pt-4 text-slate-500">
            <div className="projectHeading flex justify-between items-center px-2 text-gray-500">
              <h6 className="text-md font-bold">My Projects</h6>
              <h5 className="mr-2 p-0.5 rounded ">
                <MdOutlineAddBox />
              </h5>
            </div>

            <ul className=" justify-between items-center mx-2 py-2">
              <div className="flex justify-between items-center  hover:bg-indigo-200 rounded hover:text-gray-900 cursor-pointer">
                <li className="flex  items-center py-2 cursor-pointer hover:bg-indigo-200 rounded hover:text-gray-900">
                  {" "}
                  <span className="text-green-500 text-lg font-bold ">
                    <RxDotFilled />
                  </span>{" "}
                  Mobile App{" "}
                </li>
                <p className="mr-2">
                  <FiMoreHorizontal />
                </p>
              </div>
              <div className="flex justify-between items-center  hover:bg-indigo-200 rounded hover:text-gray-900 cursor-pointer">
                <li className="flex items-center py-2 cursor-pointer hover:bg-indigo-200 rounded hover:text-gray-900">
                  {" "}
                  <span className="text-orange-500 text-lg font-bold ">
                    <RxDotFilled />
                  </span>
                  Website Redesign{" "}
                </li>
                <p className="mr-2">
                  <FiMoreHorizontal />
                </p>
              </div>
              <div className="flex justify-between items-center  hover:bg-indigo-200 rounded hover:text-gray-900 cursor-pointer">
                <li className="flex items-center py-2 cursor-pointer hover:bg-indigo-200 rounded hover:text-gray-900">
                  {" "}
                  <span className="text-purple-300 text-lg font-bold ">
                    <RxDotFilled />
                  </span>
                  Design Systems{" "}
                </li>
                <p className="mr-2">
                  <FiMoreHorizontal />
                </p>
              </div>
              <div className="flex justify-between items-center  hover:bg-indigo-200 rounded hover:text-gray-900 cursor-pointer">
                <li className="flex items-center py-2 cursor-pointer hover:bg-indigo-200 rounded hover:text-gray-900">
                  {" "}
                  <span className="text-blue-400 text-lg font-bold ">
                    <RxDotFilled />
                  </span>
                  Wireframes{" "}
                </li>
                <p className="mr-2">
                  <FiMoreHorizontal />
                </p>
              </div>
            </ul>
            <div className="thoughtWrapper">
              <div className="thoughtbox bg-zinc-100 rounded-lg text-gray-500 text-center mx-4">
                <div className="bulbcircle relative ">
                  <p className=" absolute   text-2xl ml-20 b-20  font-bold bg-yellow-100 p-2 rounded-full">
                    <FcIdea />
                  </p>
                </div>

                <h5 className="font-semibold text-center text-gray-900 pt-4">
                  Thoughts time
                </h5>
                <p>
                  We don't have nay notice for you, till then you can share your
                  thoughts with ypur peers.{" "}
                </p>
                <button className="bg-white px-4 py-2 rounded text-gray-900 m-2">
                  Write a Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
