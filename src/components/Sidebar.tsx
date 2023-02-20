import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Modal from "./Modal/LoginModal";
import SignupModal from "./Modal/SignupModal";

type SidebarProps = {
  show: boolean;
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar = ({ show, toggleShow }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [user] = useAuthState(auth);
  const userEmail: string = user?.email as string;
  const handleSignOut = () => {
    void auth.signOut();
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={`group:bg-blue-100 absolute right-0 top-0 -z-50 h-full 
      w-1/4 transform overflow-x-hidden bg-teal-400 ease-in-out ${
        show ? "bg-red-50" : "bg-blue-900"
      }`}
      >
        <div className="p-2 pt-7 text-xl">
          {user && (
            <div className=" justify-start">{user && <p>{userEmail}</p>}</div>
          )}
        </div>
        <div className=" flex h-5/6 flex-col justify-center gap-10">
          <div className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline">
            Home
          </div>
          {!user && (
            <>
              <div
                className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline"
                onClick={() => setIsOpen(true)}
              >
                Login
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
              <div
                className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline"
                onClick={() => void setIsSignOpen(true)}
              >
                Signup
                <SignupModal isOpen={isSignOpen} setIsOpen={setIsSignOpen} />
              </div>{" "}
            </>
          )}
          <div className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline">
            Contact
          </div>
          {user ? (
            <div
              className="duration-30 pl-4 font-mono text-7xl font-extrabold text-stone-700 transition-all hover:translate-x-4 hover:underline"
              onClick={() => handleSignOut()}
            >
              Log Out
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
