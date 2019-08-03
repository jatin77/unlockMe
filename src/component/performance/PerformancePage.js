import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import Footer from "../footer/Footer";
const PerformancePage = () => {
  useEffect(() => {
    var parallax = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(parallax, {});
  }, []);
  return (
    <>
      {/* career header */}
      <div class="parallax-container">
        <div class="parallax">
          <img src="/imgs/performance.jpg" />
          <div className="parallax-text center">
            <h3 className="orange_site-text ">Performance Coaching Style</h3>

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
      <section className="section container">
        <h2 className="center heading_text">
          How does <b>performance</b>{" "}
          <span className="orange_site-text">coaching</span>
          <span className="orange_site-text">works</span> ?
        </h2>

        <div class="container">
          <div class="timeline">
            <div class="timeline-event">
              <div class="card timeline-content">
                <div class="card-content teal white-text">
                  <p className="flow-text">Interact with the coach</p>
                </div>
              </div>
              <div class="timeline-badge orange_site-bg  white-text" />
            </div>

            <div class="timeline-event">
              <div class="card timeline-content">
                <div class="card-content teal white-text">
                  <p className="flow-text">Develop tools accordingly</p>
                </div>
              </div>
              <div class="timeline-badge orange_site-bg  white-text" />
            </div>

            <div class="timeline-event">
              <div class="card timeline-content">
                <div class="card-content teal white-text">
                  <p className="flow-text">
                    Find out your strengths and weaknesses
                  </p>
                </div>
              </div>
              <div class="timeline-badge orange_site-bg  white-text" />
            </div>

            <div class="timeline-event">
              <div class="card timeline-content">
                <div class="card-content teal white-text">
                  <p className="flow-text">
                    Design the best plan to suit your requirements
                  </p>
                </div>
              </div>
              <div class="timeline-badge orange_site-bg  white-text" />
            </div>

            <div class="timeline-event">
              <div class="card timeline-content">
                <div class="card-content teal white-text">
                  <p className="flow-text">
                    Discuss with the coach and keep regular tabs on it
                  </p>
                </div>
              </div>
              <div class="timeline-badge orange_site-bg  white-text" />
            </div>
            <div class="timeline-event">
              <div class="card timeline-content">
                <div class="card-content teal white-text">
                  <p className="flow-text">
                    Boost your performance and productivity to a large extent
                  </p>
                </div>
              </div>
              <div class="timeline-badge orange_site-bg  white-text" />
            </div>
          </div>
        </div>
      </section>
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

export default PerformancePage;
