import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="group:bg-blue-100 absolute right-0 top-0 -z-50 h-full w-1/4 bg-blue-900 duration-700">
        <div className="flex h-full flex-col justify-center gap-10">
          <div className="pl-4 font-mono text-7xl font-extrabold">Home</div>
          <div className="pl-4 font-mono text-7xl font-extrabold">Gallery</div>
          <div className="pl-4 font-mono text-7xl font-extrabold">
            Something
          </div>
          <div className="pl-4 font-mono text-7xl font-extrabold">Contact</div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
