import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section6 from "./Section6";


const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />

        {/* Home Section About */}
        <Section2 />


        {/* Home Section Promotion */}
        <Section4 />


        {/* Home Section Blog */}
        <Section6 />

       
      </Layout>
    </>
  );
};

export default Home;
