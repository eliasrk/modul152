import React from "react";
import Head from "next/head";
import MainBody from "../components/MainBody";
const Body = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Gallery</title>
      </Head>
      <MainBody></MainBody>
    </>
  );
};
export default Body;
