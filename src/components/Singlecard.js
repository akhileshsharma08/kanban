import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import { HiOutlineFolder } from "react-icons/hi";
import { TbMessageDots } from "react-icons/tb";
import cardDetails from './cardData'
import { Link } from "react-router-dom";


const Singlecard = () => {

  
  return (
    <div>
      <div className="cradwrapper rounded-lg w-72 mt-4 cursor-grab bg-white">
          {cardDetails.map((item)=>(
        <div className="card p-2 shadow" key={item.id}>

             <ul className="info flex justify-between items-center mx-2">
            <li className="bg-orange-100 text-orange-400 text-sm px-1.5 py-0.5 rounded capitalize">
              {item.type}
            </li>
            <li>
              <FiMoreHorizontal />
            </li>
          </ul>
          <div className="textofcard px-1">
            <h6 className="my-2 font-bold">{item.title}</h6>
            <p className="text-gray-500">
              {item.work}
            </p>
          </div>
          <ul className="flex justify-around items-center my-2 text-gray-500">
            <li className="">
              {" "}
              <img src={card1} alt="user pics" width={80} height={40} />
            </li>
            <li className="text-sm flex items-center">
              {" "}
              <span className="text-lg mr-0.5">
               <TbMessageDots  />
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
          ))}
         
      </div>
    </div>
  );
};

export default Singlecard;
