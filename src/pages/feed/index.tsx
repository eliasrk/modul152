import React from "react";
import Head from "next/head";
import Navigationbar from "../../components/Gallery/Navigationbar";
const Body = () => {
  console.log("Feed");
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Feed</title>
      </Head>
      <Navigationbar
        setIsUpload={function (value: React.SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
        name={""}
      ></Navigationbar>
    </>
  );
};
export default Body;
