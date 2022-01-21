import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import Activities from "./Activities";
import Timeline from "./Timeline";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Activities />
      <Timeline />
      <Services/>
      <Contact />
      <Footer/>
    </>
  );
}

export default Home;
