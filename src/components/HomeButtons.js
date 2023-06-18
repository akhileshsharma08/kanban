import React from 'react'
import {CiFilter} from 'react-icons/ci'
import {AiOutlineCalendar} from 'react-icons/ai'
import {TbArticle} from 'react-icons/tb'
import {BsReverseLayoutSidebarInsetReverse} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import {HiOutlineUsers} from 'react-icons/hi'
import { IoIosArrowDown } from "react-icons/io";




const HomeButtons = () => {
  return (
    <div>
        <div className="btnboxes flex justify-between items-center my-4 mx-4">
            <div className="leftside">
                <ul className='flex justify-center items-center'>
                    <li className='outline outline-1 px-4 py-2 flex items-center text-lg  hover:bg-indigo-700  hover:text-white  cursor-pointer text-gray-600 rounded mr-2'><span className='px-1'><CiFilter/></span  > Filter <span className='px-1'><IoIosArrowDown/></span></li>
                    <li className='outline outline-1 px-4 py-2 flex items-center text-lg  hover:bg-indigo-700  hover:text-white  cursor-pointer text-gray-600 rounded mr-2'><span className='px-1'><AiOutlineCalendar/></span  > Today <span className='px-1'><IoIosArrowDown/></span></li>
                </ul>
            </div>
            <div className="rightside mr-4">
            <ul className='flex justify-center items-center'>
                    <li className='outline outline-1 px-3 py-2 flex items-center text-lg hover:bg-indigo-700  hover:text-white cursor-pointer text-gray-600 rounded mr-2'><span className='px-1'><HiOutlineUsers/></span  > Share </li>
                    <span className='border-r-2 mx-3 border-gray-300 text-white'>.</span>
                    <li className='bg-indigo-700 text-white p-3 text-lg mx-3 rounded'><BsReverseLayoutSidebarInsetReverse/></li>
                    <li><GrProjects/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomeButtons