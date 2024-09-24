import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar p-5 shadow-lg w-48">
      <ul className="font-semibold pb-4">
        <li className="flex items-center pb-3">
          <img
            className="h-6 mr-2"
            alt="home-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJ748_cKz-kIUZ5cpPwApfzq57vStYEA6p9GhQ2aZB9TSRfRxTQIjjJOxBw&s"
          />
          Home
        </li>

        <li className="flex items-center pb-3">
          <img
            className="h-6 mr-2"
            alt="shorts-logo"
            src="https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15252.png"
          />
          Shorts
        </li>

        <li className="flex items-center pb-3">
          <img
            className="h-6 mr-2"
            alt="videos-logo"
            src="https://cdn-icons-png.flaticon.com/128/17259/17259896.png"
          />
          Subscriptions
        </li>

        <li className="flex items-center">
          <img
            className="h-6 mr-2"
            alt="music-logo"
            src="https://img.icons8.com/?size=50&id=BhQ1jBS6I2Bu&format=png"
          />
          YouTube Music
        </li>
      </ul>

      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
