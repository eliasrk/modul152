import React, { useState } from "react";
import Sidebar from "./Sidebar";
const Header = () => {
  //path Animeation for x https://www.framer.com/motion/introduction/
  //for button to rotate from point of origin use this link https://tailwindcss.com/docs/transform-origin to rotate on click

  const [show, toggleShow] = useState<boolean>(false);

  return (
    <>
      <div>
        <div className="z-100  absolute top-5 right-5 flex h-10 w-10 justify-center rounded-full bg-blue-100">
          <button onClick={() => toggleShow(!show)}>X</button>
        </div>

        {show && <Sidebar />}
      </div>
    </>
  );
};

export default Header;
