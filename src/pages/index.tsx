import { type NextPage } from "next";
import MainBody from "../components/Gallery/MainBody";
import Layout from "./Layout";
const Home: NextPage = () => {
  return (
    <>
      <Layout />
      <MainBody></MainBody>
    </>
  );
};

export default Home;
