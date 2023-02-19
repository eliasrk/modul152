import { type NextPage } from "next";
import Layout from "./Layout";
import Navigationbar from "../components/Navigationbar";
const Home: NextPage = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Layout></Layout>
    </>
  );
};

export default Home;
