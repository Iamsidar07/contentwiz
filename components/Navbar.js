import React, { useState } from "react";
import Link from "next/link";
import { IoReorderThreeOutline } from 'react-icons/io5';
import { GiCrownedSkull } from 'react-icons/gi';

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/", id: 1 },
    { name: "Create Content", link: "/write-content", id: 2 },
  ];
  const [open, setOpen] = useState(false);


  return (
    <nav className={`bg-white sticky top-0 right-0 left-0 transition-all duration-250 ease-in z-[20] border-b   `}>

      <div className="max-w-7xl mx-auto">
        <div className="flex  items-center justify-between  ">
          <div className="z-[50] py-4 px-3 ">

            <Link href={"/"} >
              <div className="flex items-center">
                <GiCrownedSkull color="black" size={30}/>
                <span className="text-2xl md:text-3xl">contentWiz.org</span></div>
            </Link>

            <div
              onClick={() => setOpen(!open)}
              className="  absolute right-5 top-5 cursor-pointer md:hidden"
            >
              <IoReorderThreeOutline color="#100025" size={35}/>

            </div>
          </div>

          <ul
            className={` md:h-fit flex flex-col items-center space-x-1 md:flex-row  border-gray-100  md:border-none  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[0] right-0 w-[95%] pt-8 md:pt-0 md:w-auto md:pl-0 p-2 text-center transition-all duration-250 ease-in ${open ? " top-14 bg-white backdrop-sm h-[95vh] " : "top-[-76vh] "
              }`}
          >
            {Links.map((link) => (
              <li
                key={link.id}
                className={` bg-opacity-25 group whitespace-nowrap  md:my-0 text-left p-3 md:hover:text-[#0082FF]  rounded-2xl transition-all ease-in duration-100 cursor-pointer `}
              >
                <Link href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}

            <Link href="https://instagram.com/iamsidar07" target={"_blank"}>
              <button className="px-12  rounded-2xl py-4   border-none shadow-lg  bg-[#100025] text-white md:hover:bg-[#100025d8]  md:hover:translate-y-2 transition-all duration-150 ease-in tracking-wider ">
                follow</button>
            </Link>
          </ul>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
