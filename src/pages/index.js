import React, { useState } from "react";
import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import { homeObjTwo } from "../components/InfoSection/Data";
import { homeObjThree } from "../components/InfoSection/Data";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import { ContactUs } from "../components/Contact/contact";
import Quote from "../components/QuoteSection/Quote";
import Work from "../components/WorkSection/Work";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} /> */}
      <Quote />
      <Services />
      <Work />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
