import React from "react";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { TbMessageDots } from "react-icons/tb";
import { HiOutlineBell } from "react-icons/hi";
// import { BsArrow90DegDown, BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import UserLogo from "../assets/ladyface.png";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import "../App.css";


const Navbar = () => {
  return (
    <>
      <div className="navbar   ">
        <header class="text-gray-600 body-font  w-full  ">
          <div class="  flex  p-5  items-center justify-between border-b-2">
            <input
              type="text"
              placeholder="Search for Anything..."
              className=" ml-4 relative w-1/2 px-8 text-lg py-1 bg-slate-100 rounded"
            />
            <div class="md:ml-auto flex  items-center text-base justify-center">
              <span class="mr-5 text-xl cursor-pointer hover:text-gray-400">
                <LuCalendarDays />
              </span>
              <span class="mr-5 text-xl cursor-pointer hover:text-gray-400">
                <TbMessageDots />
              </span>
              <span class="mr-5 text-xl cursor-pointer hover:text-gray-400">
                <HiOutlineBell />
              </span>
            </div>
            <div className="flex items-center">
              <img src={UserLogo} alt="" width={40} height={40} />
              <span className="mx-2 cursor-pointer">
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
const Bar = styled(FaBars)`
  color: #0d062d;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
  }
`;
