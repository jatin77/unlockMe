import React from "react";
import HeaderSlides from "../../component/headerSlides/HeaderSlides";
import CoachCarousel from "../../component/coachesCarousel/CoachCarousel";
import BookBanner from "../../component/bookBanner/BookBanner";
import WorksHow from "../../component/worksHow/WorksHow";
import ChooseUs from "../../component/chooseUs/ChooseUs";
import TransformBanner from "../../component/transformBanner/TransformBanner";
import Footer from "../../component/footer/Footer";
import FloatingGetApp from "../../component/floatinfGetApp/FloatingGetApp";
const Home = () => {
  return (
    <>
      <FloatingGetApp />
      {/* Header slider */}
      <HeaderSlides />

      {/* carousel */}
      <CoachCarousel />
      {/* book coaching banner */}
      <BookBanner />
      {/* how it works */}
      <WorksHow />
      {/* transform banner */}
      <TransformBanner />
      {/* choose us section */}
      <ChooseUs />
      {/* footer above */}
      <Footer />
    </>
  );
};

export default Home;
