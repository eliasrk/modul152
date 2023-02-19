import React from "react";
type SidebarProps = {
  show: boolean;
};
const Sidebar = ({ show }: SidebarProps) => {
  return (
    <>
      <div
        className={`group:bg-blue-100 absolute right-0 top-0 -z-50 h-full 
      w-1/4 transform bg-teal-400 ease-in-out ${
        show ? "bg-red-50" : "bg-blue-900"
      }`}
      >
        <div className="flex h-full flex-col justify-center gap-10">
          <div className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline">
            Home
          </div>
          <div className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline">
            Login
          </div>
          <div className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline">
            Signup
          </div>
          <div className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline">
            Contact
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
