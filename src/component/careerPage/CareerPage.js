import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
const CareerPage = () => {
  useEffect(() => {
    var parallax = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(parallax, {});
  }, []);
  return (
    <>
      {/* career header */}
      <div className="parallax-container">
        <div className="parallax">
          <img src="/imgs/Group 1.jpg" />
          <div className="parallax-text center">
            <h3 className="orange_site-text ">Career Coaching Style</h3>

            <p className="grey-text text-lighten-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              officiis iusto, corrupti ercitationem ea magni dolorem nam error,{" "}
              <br /> vero expedita nemo, mollitia ducimus m voluptates.
              Voluptate. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              asperiores amet, dicta vel beatae aut!
            </p>
            <div>
              <Link
                to=""
                className=" white-text btn-large z-depth-4  orange_site-bg waves-effect waves-light  "
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="center heading_text">
          What is the difference between <b>career</b>{" "}
          <span className="orange_site-text">coaching</span> and <b>career</b>{" "}
          <span className="orange_site-text">counselling</span> ?
        </h2>
      </div>
      <section className="section grey lighten-3 career-benefits">
        <h3 className="orange_site-text about_card_content-head">
          <span>Benefits</span> <img src="/imgs/New Hire.png" alt="" />
        </h3>
        <div className="container">
          <div className="row">
            <div className="col s6 center-align">
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className="col s6 center-align">
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerPage;
