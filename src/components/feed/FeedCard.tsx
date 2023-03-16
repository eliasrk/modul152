import React from "react";
import Image from "next/image";
type FeedCardProps = {
  url: string;
};

const FeedCard: React.FC<FeedCardProps> = ({ url }: FeedCardProps) => {
  return (
    <>
      <div className="rounded-lg bg-gray-200 p-1">
        <div className="flex w-full justify-center overflow-hidden rounded-lg bg-white ">
          <Image
            src={url}
            width={1000}
            height={1000}
            alt=""
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
export default FeedCard;
