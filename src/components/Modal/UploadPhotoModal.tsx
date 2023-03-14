import { uuidv4 } from "@firebase/util";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { Fragment, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, storage } from "../../firebase/firebase";

type UploadModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  name: string;
};

//TODO: limit file upload size and add type of file allowed

const UploadPhotoModal = ({
  isModalOpen,
  setIsModalOpen,
  onClose,
  name,
}: UploadModalProps) => {
  const [isImageUpload, setImageUpload] = useState<File | null>(null);
  const CreativeCommons = [
    { License: "CC BY" },
    { License: "CC BY-ND" },
    { License: "CC BY-SA" },
    { License: "CC BY-NC" },
    { License: "CC BY-NC-SA" },
    { License: "CC BY-NC-ND" },
  ];
  const handleCreatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setCreator(event.target.value);
  console.log(creator)
}

  const [isImageList, setIsImageList] = useState<string[]>([]);
  const imageListRef = ref(storage, "images/");
  const [creator, setCreator] = useState<string>("");
  const [user] = useAuthState(auth);
  const [selected, setSelected] = useState(CreativeCommons[0]);
  const uploadImage = () => {
    if (isImageUpload === null) return;
    const name: string = isImageUpload.name + uuidv4();
    const imageRef = ref(storage, `images/${name}`);
    uploadBytes(imageRef, isImageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setIsImageList((prev) => [...prev, url]);
            const docRef = addDoc(collection(db, "myCollection"), {
              name: name,
              username: creator,
              createdBy: user?.email,
              licensing: selected?.License,
              createdAt: Timestamp.now(),
              likes: 0,
            });
          })
          .catch((error) => {
            console.log("Error getting download URL:", error);
          });
      })
      .catch((error) => {
        console.log("Error uploading image:", error);
      });
    const thumbnailRef = ref(storage, `thumbnail/${name}`);
    uploadBytes(thumbnailRef, isImageUpload)
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

    setIsModalOpen(false);
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
      <button onClick={() => setIsModalOpen(true)}></button>
      <Transition show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto "
          onClose={() => setIsModalOpen(false)}
        >
          <div className="fixed inset-0 flex items-center justify-center p-4 ">
            <Dialog.Panel className="flex min-h-screen flex-col items-center justify-center ">
              <div className="align-center flex justify-center">
                <div className="h-full rounded-3xl bg-white bg-gradient-to-b p-5 shadow-md">
                  <div className="flex w-full justify-end ">
                    <button
                      className="btn-sm btn-circle shadow-sm hover:bg-slate-100"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ✕
                    </button>
                  </div>
                  <input
                    className="file-input-ghost file-input mb-2 w-full max-w-xs"
                    type="file"
                    onChange={(event) => {
                      if (event.target.files && event.target.files[0]) {
                        setImageUpload(event.target.files[0]);
                      }
                    }}
                  />
                  <div>
                    <div className="mt-2 flex items-center gap-2">
                      <h2>Creator: </h2>
                      <input
                        type="text"
                        value={creator}
                        onChange={handleCreatorChange}
                        className="ml-1 w-full rounded ring ring-gray-50 drop-shadow-lg"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <h2>License: </h2>
                      <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1 w-full">
                          <Listbox.Button className="relative my-5 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">
                              {selected?.License}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <Icon icon="lucide:chevrons-up-down" />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {CreativeCommons.map((license, licenseIdx) => (
                                <Listbox.Option
                                  key={licenseIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={license}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {license.License}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                          <Icon icon="mdi:tick" />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                  </div>
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
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UploadPhotoModal;
