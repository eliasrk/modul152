import { type NextPage } from "next";
import Layout from "./Layout";
import Navigationbar from "../components/Navigationbar";
import { SetStateAction } from "react";

const Home: NextPage = () => {
  return (
    <>
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
