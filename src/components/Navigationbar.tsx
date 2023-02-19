import React, { useState } from "react";
import Sidebar from "./Sidebar";
type Header = {
  show: boolean;
};
const Header = () => {
  //path Animeation for x https://www.framer.com/motion/introduction/
  //for button to rotate from point of origin use this link https://tailwindcss.com/docs/transform-origin to rotate on click

  const [show, toggleShow] = useState<boolean>(false);

  return (
    <>
      <div>
        <label className="swap-rotate swap absolute right-20 top-5 rounded-full bg-teal-100 p-1">
          <svg
            className="rotate-45 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <label className="swap-rotate swap absolute right-5 top-5 rounded-full bg-teal-100 p-1">
          <input type="checkbox" onClick={() => toggleShow(!show)} />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {show && <Sidebar show={false} toggleShow={toggleShow} />}
      </div>
    </>
  );
};

export default Header;
