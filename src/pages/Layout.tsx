import { type NextPage } from "next";
import Head from "next/head";
import Navigationbar from "../components/Navigationbar";
const Layout: NextPage = () => {
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
    </>
  );
};
export default Layout;
