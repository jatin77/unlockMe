import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
const CoachCarousel = () => {
  useEffect(() => {
    var carousel = document.querySelectorAll(".carousel");
    var instance3 = M.Carousel.init(carousel, {});
  }, []);
  return (
    <>
      <section className="section  carousel_coaches ">
        <h2 className="center heading_text">
          Your <span className="orange_site-text ">Coaches</span>
        </h2>
        <div class="carousel ">
          <a class="carousel-item" href="#one!">
            <div class="row">
              <div class="col s12 m12">
                <div class="card">
                  <div class="card-image">
                    <img
                      src="/imgs/black-and-white-face-fashion-2530337.jpg"
                      alt="carousel_img"
                    />
                    <span class="card-title">Name Here</span>
                  </div>
                  <div class="card-content">
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a class="carousel-item" href="#one!">
            <div class="row">
              <div class="col s12 m12">
                <div class="card">
                  <div class="card-image">
                    <img
                      alt="carousel_img"
                      src="/imgs/black-and-white-face-fashion-2530337.jpg"
                    />
                    <span class="card-title">Name Here</span>
                  </div>
                  <div class="card-content">
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a class="carousel-item" href="#one!">
            <div class="row">
              <div class="col s12 m12">
                <div class="card">
                  <div class="card-image">
                    <img
                      alt="carousel_img"
                      src="/imgs/black-and-white-face-fashion-2530337.jpg"
                    />
                    <span class="card-title">Name Here</span>
                  </div>
                  <div class="card-content">
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a class="carousel-item" href="#one!">
            <div class="row">
              <div class="col s12 m12">
                <div class="card">
                  <div class="card-image">
                    <img
                      alt="carousel_img"
                      src="/imgs/black-and-white-face-fashion-2530337.jpg"
                    />
                    <span class="card-title">Name Here</span>
                  </div>
                  <div class="card-content">
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a class="carousel-item" href="#one!">
            <div class="row">
              <div class="col s12 m12">
                <div class="card">
                  <div class="card-image">
                    <img
                      alt="carousel_img"
                      src="/imgs/black-and-white-face-fashion-2530337.jpg"
                    />
                    <span class="card-title">Name Here</span>
                  </div>
                  <div class="card-content">
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                    <i class="amber-text accent-4 fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default CoachCarousel;
