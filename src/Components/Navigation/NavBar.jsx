import { Fragment } from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {MdClose} from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNavigation = () => {
    setNav(!nav);
    console.log("Toggle Map");
  };

  return (
    <Fragment>
      <div className="flex w-full items-center justify-between p-4  text-white bg-fuchsia-900 h-12">
        <span className="text-2xl font-bold">Logo</span>
        <span className="md:hidden flex flex-end" onClick={toggleNavigation}>
          {nav ?   <MdClose size={30} text-white/> : <GiHamburgerMenu  size={30} text-white /> }
        </span>
        <div className="hidden md:flex items-center justify-end space-x-2">
          <ul className="flex justify-end items-center space-x-6">
            <li className="font-md">Home</li>
            <li className="font-md">Contact</li>
            <li className="font-md">About</li>
          </ul>
          <div className="flex items-center justify-end space-x-2">
            <span className="px-1">
              <FaYoutube size={25} />
            </span>
            <span className="px-1">
              <FaInstagram size={23} />
            </span>
            <span className="px-1">
              <FaLinkedin size={23} />
            </span>
          </div>
        </div>
      </div>
      {nav ? (
        <div className=" p-4 bg-fuchsia-300 shadow-lg text-white absolute right-0 rounded-sm w-full h-[50vh] " style={{overflowX:'hidden'}}>
          <ul className="flex flex-col justify-center items-center gap-4">
            <li className="font-md">Home</li>
            <li className="font-md">Contact</li>
            <li className="font-md">About</li>
          </ul>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <span className="flex">
              <FaYoutube size={25} />
            </span>
            <span className="px-1">
              <FaInstagram size={23} />
            </span>
            <span className="px-1">
              <FaLinkedin size={23} />
            </span>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default NavBar;
