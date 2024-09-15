import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const time = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      console.log(json[1]);
      const suggestions = json[1] || []; // Ensure json[1] contains suggestions
      setSuggestions(suggestions);

      // Dispatch cacheResults after successfully retrieving suggestions
      dispatch(
        cacheResults({
          [searchQuery]: suggestions,
        })
      );
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex w-full h-20 px-4 py-2 justify-between shadow-lg items-center bg-white relative">
      <div className="flex items-center space-x-4">
        <img
          className="h-7 cursor-pointer"
          src="https://miro.medium.com/v2/resize:fit:600/1*rddekGCO3PjhXqtePcIYIQ.png"
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHT40r-P1hpTH9xkjvXy0V0TIzzX-Kwm_xSA&s"
          alt="Youtube-logo"
        />
      </div>

      <div className="relative w-1/2 flex items-center">
        <input
          className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <button className="h-10 bg-gray-100 border border-gray-300 rounded-r-full text-lg  px-4  hover:bg-gray-300">
          <CiSearch />
        </button>

        {showSuggestions && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
            <ul className="max-h-60 overflow-y-auto">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <CiSearch /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          className="h-9"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgfd6ebm7aL_5Zd1X6UvEG6heRZTh3PHrkA&s"
          alt="user-icon"
        />
      </div>
    </div>
  );
}

export default Header;
