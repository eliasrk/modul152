import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../../firebase/firebase";
import FeedCard from "./FeedCard";

type feedProps = {
  //
};

const Feed: React.FC<feedProps> = () => {
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
      <div className="m-2 flex flex-wrap justify-center gap-2 ">
        {imageList.map((url, index) => (
          <div key={index}>
            <FeedCard url={url} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Feed;
