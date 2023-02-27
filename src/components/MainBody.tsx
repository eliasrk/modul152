import { getDownloadURL, listAll, ref } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";
import FetchUrlData from "./FetchUrlData";
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
          <div className="flex flex-wrap gap-10 ">
            {imageList.map((url, index) => (
              <div
                key={index}
                className="card bg-base-100  w-96 rounded-lg shadow-xl transition-shadow ease-in-out hover:z-10 hover:scale-105 hover:shadow-2xl"
              >
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <div className="flex h-full flex-col rounded-lg">
                  <div
                    className="h-full rounded-lg bg-gray-200 p-1"
                    key={index}
                  >
                    <Image
                      src={url}
                      width={500}
                      height={500}
                      alt=""
                      loading="lazy"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <FetchUrlData url={url} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default MainBody;
