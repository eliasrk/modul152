import React, { Fragment, useState } from "react";
import Sidebar from "./Sidebar";
import UploadPhotoModal from "./Modal/UploadPhotoModal";
import { Menu, Transition } from "@headlessui/react";

type headerProps = {
  setIsUpload: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
};

const Header = ({ name }: headerProps) => {
  const [show, toggleShow] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
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
      <div className="flex justify-end p-5">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="justify-center rounded-full bg-black bg-opacity-20 p-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <div className="mr-2 h-full w-5 " aria-hidden="true">
                          <svg
                            className="rotate-45 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 512 512"
                          >
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                          </svg>
                        </div>
                      ) : (
                        <div className="mr-2 h-5 w-5" aria-hidden="true"></div>
                      )}
                      Upload
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <div className="mr-2 h-5 w-5" aria-hidden="true">
                          Icon
                        </div>
                      ) : (
                        <div className="mr-2 h-5 w-5" aria-hidden="true"></div>
                      )}
                      Log in
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <div className="mr-2 h-5 w-5" aria-hidden="true">
                          Icon
                        </div>
                      ) : (
                        <div className="mr-2 h-5 w-5" aria-hidden="true"></div>
                      )}
                      Sign up
                    </button>
                  )}
                </Menu.Item>
              </div>

              <div className="px-1 py-1"></div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default Header;

{
  /* <>
      <div className={"${ show ? 'rotate-90' : ''}"}>
        <label
          className={
            "absolute right-20 top-5 z-50 rounded-full bg-teal-100 p-1 shadow-md"
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
        <label className="absolute right-5 top-5 z-50 rounded-full bg-teal-100 p-1 shadow-md">
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

          {/*      <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg> */
  /* </label>
        {show && <Sidebar show={show} toggleShow={toggleShow} />}
      </div>
        </> */
}
