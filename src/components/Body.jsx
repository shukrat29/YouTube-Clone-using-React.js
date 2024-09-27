import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* Outlet contains MainContainer=(ButtonList and VideoContainer) and WatchPage. displays one of them, according to appRouter */}
      <Outlet />
    </div>
  );
};

export default Body;
