import { type NextPage } from "next";
import Layout from "./Layout";
import Navigationbar from "../components/Navigationbar";
import { SetStateAction } from "react";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Gallery</title>
      </Head>
      <Navigationbar
        setIsUpload={function (value: SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
        name={""}
      ></Navigationbar>
      <Layout></Layout>
    </>
  );
};

export default Home;
