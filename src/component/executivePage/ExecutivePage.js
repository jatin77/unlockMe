import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import Footer from "../footer/Footer";
const ExecutivePage = () => {
  useEffect(() => {
    var parallax = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(parallax, {});
  }, []);
  return (
    <>
      {/* career header */}
      <div class="parallax-container">
        <div class="parallax">
          <img src="/imgs/executive.jpg" />
          <div className="parallax-text center">
            <h3 className="orange_site-text ">Executive Coaching Style</h3>

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
                href="#"
                className=" white-text btn-large z-depth-4  orange_site-bg waves-effect waves-light  "
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="section grey lighten-3">
        <div className="container">
          <div className="row">
            <div className="col s6 center-align">
              <h5 className="orange_site-text about_card_content-head">
                <span>Benefits</span> <img src="/imgs/New Hire.png" alt="" />
              </h5>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className="col s6 center-align">
              <h5 className="orange_site-text about_card_content-head">
                <span>Benefits</span> <img src="/imgs/New Hire.png" alt="" />
              </h5>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
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

export default ExecutivePage;
