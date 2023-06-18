import React from 'react'
import { MdOutlineEdit, MdOutlineAddBox } from "react-icons/md";
import { IoLinkOutline } from "react-icons/io5";
import Peoples from "../assets/peoples.png";


const HomeHeading = () => {
  return (
    <div>
        <div className=" upperHeadingSection flex justify-between mt-4">
          <div className="heading flex justify-start items-center py-4 ml-4">
            <div>
              <h1 className="text-4xl font-semibold text-gray-900">
                Mobile App
              </h1>
            </div>
            <ul className="flex justify-center items-center mx-2 text-indogo-700 text-md pt-2">
              <li className="bg-gray-300 rounded mr-2 p-0.5 ">
                <MdOutlineEdit />
              </li>
              <li className="bg-gray-300 rounded mr-2 p-0.5 ">
                <IoLinkOutline />
              </li>
            </ul>
          </div>
            <div className="usersList mx-4 mt-4">
              <div className="buttonandUsers">
                <ul className="flex justify-center items-center">
                  <span className="bg-gray-300 rounded mr-1 p-0.5 text-blue-800">
                    <MdOutlineAddBox />
                  </span>{" "}
                  <li className="rounded mr-1 p-0.5 text-blue-800">Invite</li>
                  <li>
                    {" "}
                    <img
                      src={Peoples}
                      alt="user list "
                      width={140}
                      height={40}
                    />
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHeading