import footerData from "../../data/footerData";
// import { MdPlace } from "react-icons/md";
import { MdPlace } from "@react-icons/all-files/md/MdPlace";
// import { IoCallSharp } from "react-icons/io5";
import { IoCallSharp } from "@react-icons/all-files/io5/IoCallSharp";
import { TbMailPlus } from "react-icons/tb";


import React, { memo } from "react";                                



const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,

}

const Footer = () =>{
    return(
        <footer className="bg-gradient-to-r from-[#040404] via-[#262626] to-[#2d2d2d] text-white py-10 sm:py-12 w-full border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
                {footerData.map((item,index) => (  
                    <div key={index} className="flex items-start gap-5 ">
                        <div className="text-3xl text-gray-400 shrink-0 mt-2">
                            {iconMap[item.icon]}
                        </div>
                        <div>
                            <h3 className=" font-semibold">{item.text}</h3>
                            <p className="text-gray-300 text-sm">{item.details}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" max-w-5xl mx-auto text-gray-500 text-sm sm:pt-8 pt-6 px-4 sm:text-center">
                &copy; {new Date().getFullYear()} World Atlas. All rights reserved.
            </div>
        </footer>
    )
}

export default memo(Footer);