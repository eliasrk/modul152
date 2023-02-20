import React, { useState } from "react";
import Sidebar from "./Sidebar";
import UploadPhotoModal from "./Modal/UploadPhotoModal";

type headerProps = {
  setIsUpload: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
};

const Header = ({ name }: headerProps) => {
  const [show, toggleShow] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handleCloseModal(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className={"${ show ? 'rotate-90' : ''}"}>
        <label
          className={
            "z-5 swap-rotate swap absolute right-20 top-5 rounded-full bg-teal-100 p-1 shadow-md"
          }
        >
          <UploadPhotoModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClose={handleCloseModal}
            name={name}
          />
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
        <label className="swap-rotate swap absolute right-5 top-5 rounded-full bg-teal-100 p-1 shadow-md">
          <input type="checkbox" onClick={() => toggleShow(!show)} />
          <svg
            className="swap-off fill-current "
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
        {show && <Sidebar show={show} toggleShow={toggleShow} />}
      </div>
    </>
  );
};

export default Header;
