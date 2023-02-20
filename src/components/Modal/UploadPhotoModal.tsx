import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { uuidv4 } from "@firebase/util";

type UploadModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  name: string;
};

const UploadPhotoModal: React.FC<UploadModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  onClose,
}) => {
  const [isImageUpload, setImageUpload] = useState(null);

  const [isImageList, setIsImageList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (isImageUpload === null) return;
    const name: string = (isImageUpload as File).name;
    const imageRef = ref(storage, `images/${name + uuidv4()}`);
    uploadBytes(imageRef, isImageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setIsImageList((prev) => [...prev, url]);
          })
          .catch((error) => {
            console.log("Error getting download URL:", error);
          });
      })
      .catch((error) => {
        console.log("Error uploading image:", error);
      });
    setIsOpen(false);
    console.log("uploading image");
  };
  useEffect(() => {
    listAll(imageListRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef)
            .then((url) => {
              setIsImageList((prev) => [...prev, url]);
            })
            .catch((error) => {
              console.error("Error getting download URL: ", error);
            });
        });
      })
      .catch((error) => {
        console.error("Error listing images: ", error);
      });
    console.log("isImageUpload", isImageUpload);
  }, [isImageUpload]);
  return (
    <>
      <button onClick={() => setIsOpen(true)}></button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Panel className="flex min-h-screen flex-col items-center justify-center ">
            <div className="align-center flex justify-center">
              <div className="rounded-3xl bg-white bg-gradient-to-b p-5 shadow-md">
                <div className="flex w-full justify-end ">
                  <button
                    className="btn-sm btn-circle shadow-sm hover:bg-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>
                </div>
                <input
                  className="file-input-ghost file-input mb-2 w-full max-w-xs"
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />

                <div className="flex w-full items-center justify-center ">
                  <button
                    type="submit"
                    className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    onClick={() => uploadImage()}
                  >
                    Upload Image
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};

export default UploadPhotoModal;
