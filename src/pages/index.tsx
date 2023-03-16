import { type NextPage } from "next";
import type { SetStateAction } from "react";
import Head from "next/head";
import MainBody from "../components/Gallery/MainBody";
import Navigationbar from "../components/Gallery/Navigationbar";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Gallery</title>
      </Head>
      <Navigationbar
        setIsUpload={function (): void {
          throw new Error("Function not implemented.");
        }}
        name={""}
      ></Navigationbar>
      <MainBody></MainBody>
    </>
  );
};

export default Home;
