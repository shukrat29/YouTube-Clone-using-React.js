import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="grid grid-flow-col m-2 p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-11 cursor-pointer"
          alt="hamburger-menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <img
          className="h-11 mx-1"
          alt="youtube-logo"
          src="https://i.insider.com/59a59b08248849308f50942a?width=1200&format=jpeg"
        />
      </div>

      <div className="col-span-10 items-center flex">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full px-5 p-2.5 pb-3.5 flex items-center justify-center bg-gray-100">
          <IoSearchOutline />
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s"
        />
      </div>
    </div>
  );
};

export default Header;
