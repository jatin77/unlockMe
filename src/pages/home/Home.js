import React from "react";
import HeaderSlides from "../../component/headerSlides/HeaderSlides";
import CoachCarousel from "../../component/coachesCarousel/CoachCarousel";
import BookBanner from "../../component/bookBanner/BookBanner";
import WorksHow from "../../component/worksHow/WorksHow";
import ChooseUs from "../../component/chooseUs/ChooseUs";
import TransformBanner from "../../component/transformBanner/TransformBanner";
import Footer from "../../component/footer/Footer";
import FloatingGetApp from "../../component/floatinfGetApp/FloatingGetApp";
class Home extends React.Component {
  state = {
    code: "",
    errorMessage: ""
  };

  handleSuccess = data => {
    console.log(data);
    this.setState({
      code: data.code,
      errorMessage: ""
    });
  };

  handleFailure = error => {
    console.log(error);

    this.setState({
      code: "",
      errorMessage: error.errorMessage
    });
  };

  render() {
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
        <LinkedIn
          response_type="code"
          clientId="817ew6hqc3jaeg"
          scope="r_liteprofile r_emailaddress w_member_social"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="https://dreamy-hawking-d497ff.netlify.com/"
          renderElement={({ onClick, disabled }) => (
            <button onClick={onClick} disabled={disabled}>
              Custom linkedin element
            </button>
          )}
        />
      </>
    );
  }
}

export default Home;
