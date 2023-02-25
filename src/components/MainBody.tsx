import { getDownloadURL, listAll } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { ref } from "firebase/storage";
import { storage } from "../firebase/firebase";
import Image from "next/image";

const MainBody = () => {
  const [imageList, setImageList] = useState<string[]>([]);
  useEffect(() => {
    const imageListRef = ref(storage, "images/");
    const getImageList = async () => {
      const res = await listAll(imageListRef);
      const urls = await Promise.all(
        res.items.map(async (itemRef, index, array): Promise<string> => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );
      setImageList(urls);
    };

    void getImageList();
  }, []);
  return (
    <>
      <main className="-z-100">
        <div>
          <div className="flex flex-wrap gap-10">
            {imageList.map((url, index) => (
              <>
                <div key={index} className="card bg-base-100 w-96 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title"></h2>
                  </div>
                  <figure className="bgp-10 h-full items-center">
                    <Image
                      src={url}
                      width={300}
                      height={200}
                      alt=""
                      loading="lazy"
                      key={index}
                    />
                  </figure>
                </div>
              </>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default MainBody;
