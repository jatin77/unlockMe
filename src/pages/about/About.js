import React from "react";
import Footer from "../../component/footer/Footer";
import AboutHeader from "../../component/aboutHeader/AboutHeader";
import FloatingGetApp from "../../component/floatinfGetApp/FloatingGetApp";
import AboutCards from "../../component/aboutCards/AboutCards";
import AboutTeam from "../../component/aboutTeam/AboutTeam";

const About = () => {
  return (
    <>
      <FloatingGetApp />
      <AboutHeader />
      <AboutCards />
      <AboutTeam />
      <Footer />
    </>
  );
};

export default About;
