import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { chacheResults } from "../redux/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // update cache
    dispatch(
      chacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between gap-11 md:gap-0 m-2 p-5 shadow-lg">
      <div className="flex">
        <img
          onClick={toggleMenuHandler}
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

      <div className="flex">
        <div className=" ">
          <div className="flex">
            <input
              className="w-1/2 border border-gray-400 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-400 rounded-r-full px-5 p-2.5 pb-3.5 flex items-center justify-center bg-gray-100">
              <IoSearchOutline />
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-5 w-[37rem]">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="flex items-center shadow-sm hover:bg-gray-100"
                  >
                    <IoSearchOutline />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="">
          <img
            className="h-10"
            alt="user-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ891HLuugNKthcStMIQ3VD_phd6XrcYAhkjA&s"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
