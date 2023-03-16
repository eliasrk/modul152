import { Icon } from "@iconify/react";
import { doc, orderBy, QuerySnapshot } from "firebase/firestore";
import {
  query,
  collection,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getImageSize } from "next/dist/server/image-optimizer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/firebase";
import FetchUrlData from "./FetchUrlData";

type cardsProps = {
  url: string;
};

const Cards: React.FC<cardsProps> = ({ url }: cardsProps) => {
  const [like, setLike] = useState<boolean>(false);
  const [likedCount, setLikedCount] = useState<number>(0);
  const [tempary, setTempary] = useState<string>("");
  const [user] = useAuthState(auth);
  const urlblur = url + "?w=10&q=1";
  useEffect(() => {
    async function getlikes(name: string) {
      const temp1 = name.slice(82);
      const temp = temp1.substring(0, temp1.indexOf("?"));
      setTempary(temp);
      const q = query(
        collection(db, "myCollection"),
        where("name", "==", temp)
      );
      const querySnapshot: QuerySnapshot = await getDocs(q);
      if (querySnapshot) {
        querySnapshot.forEach((doc) => {
          setLikedCount(doc.data().likes as number);
        });
      }
    }
    getlikes(url).catch((error) => {
      console.log("Error getting document:", error);
    });
  }, []);

  async function toggleLike() {
    const q = query(
      collection(db, "myCollection"),
      where("name", "==", tempary)
    );

    const newLikeValue = !like;

    setLike(newLikeValue);
    const querySnapshot: QuerySnapshot = await getDocs(q);
    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, {
          likes: likedCount + (like ? -1 : 1),
        }).catch((error) => {
          console.log("Error updating document:", error);
        });
        setLikedCount(likedCount + (like ? -1 : 1));
      });
    }
  }

  return (
    <>
      <div
        //TODO: add Flex Grow to make the cards the same size
        className={`${
          !like ? "animate-clicked" : ""
        } " bg-base-100 w-96 rounded-lg shadow-xl transition-shadow ease-in-out hover:shadow-2xl `}
      >
        <div className="flex flex-col rounded-lg">
          <div className="rounded-lg bg-gray-200 p-1">
            <div className=" h-96 place-content-center overflow-hidden rounded-lg active:scale-150">
              <Image
                src={url}
                width={700}
                height={700}
                alt=""
                placeholder="blur"
                blurDataURL={urlblur}
                loading="lazy"
                className="rounded-lg "
              />
            </div>
          </div>

          <div className="flex justify-center pb-2">
            <FetchUrlData url={url} />
            <div className="grid place-content-center p-5 align-middle">
              <div
                className={`${
                  !like ? " text-white" : "text-gray-900"
                } group flex items-center gap-2 rounded-full p-1 hover:bg-gray-100 active:animate-clicked active:animate-wiggle active:bg-gray-200 `}
                onClick={() => void toggleLike()}
              >
                <div className="text-black">{likedCount}</div>
                {like ? (
                  <Icon icon="icon-park-solid:like" color="red" />
                ) : (
                  <Icon icon="icon-park-outline:like" color="gray" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
