import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
const HeaderSlides = () => {
  useEffect(() => {
    var slider = document.querySelectorAll(".slider");
    var instance2 = M.Slider.init(slider, { indicators: false });
  }, []);
  return (
    <>
      <div class="slider">
        <Link
          href="#"
          className="white-text btn-large z-depth-4  orange_site-bg waves-effect waves-light slider-goto "
        >
          Book now
        </Link>

        <ul class="slides">
          <li>
            <img
              src="/imgs/book-bindings-bookcase-books-694740.jpg"
              alt="lead_img"
            />
            <div class="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 class="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>

          <li>
            <img
              src="/imgs/conference-learning-meeting-7095.jpg"
              alt="lead_img"
            />
            <div class="caption right-align">
              <h3>Left Aligned Caption</h3>
              <h5 class="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img
              src="/imgs/adult-architecture-black-and-white-247899.jpg"
              alt="lead_img"
            />
            <div class="caption left-align">
              <h3>Right Aligned Caption</h3>
              <h5 class="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderSlides;
