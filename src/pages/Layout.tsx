import { getDownloadURL, listAll } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { ref } from "firebase/storage";
import { storage } from "../firebase/firebase";
import Image from "next/image";
const Body = () => {
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    const imgageListRef = ref(storage, "images/");

    const getImageList = async () => {
      const res = await listAll(imgageListRef);
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
      <div className="flex h-20 shadow-md"></div>
      <div className="border-t"></div>

      <div>
        <div className="flex flex-wrap gap-10">
          {imageList.map((url, index) => (
            <>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                </div>
                <figure className="bgp-10 h-full items-center">
                  <Image
                    src={url}
                    width={300}
                    height={200}
                    alt=""
                    lazy={true}
                  />
                </figure>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
