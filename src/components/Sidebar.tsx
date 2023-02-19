import error from "next/error";
import React, { useState } from "react";
import { useAuthState, useIdToken } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Modal from "./LoginModal";

type SidebarProps = {
  show: boolean;
};
const Sidebar = ({ show }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);
  const userEmail: string = user?.email as string;
  return (
    <>
      <div
        className={`group:bg-blue-100 absolute right-0 top-0 -z-50 h-full 
      w-1/4 transform overflow-x-hidden bg-teal-400 ease-in-out ${
        show ? "bg-red-50" : "bg-blue-900"
      }`}
      >
        <div className="flex h-full flex-col justify-center gap-10">
          <div>
            {user && (
              <div className="justify-start">
                <p>{userEmail}</p>
              </div>
            )}
          </div>
          <div className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline">
            Home
          </div>
          <div
            className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline"
            onClick={() => setIsOpen(true)}
          >
            Login
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
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
