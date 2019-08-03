import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
const BookBanner = () => {
  useEffect(() => {
    var select = document.querySelectorAll("select");
    var instances = M.FormSelect.init(select, {});
  }, []);
  return (
    <>
      <section className="section booking_banner valign-wrapper">
        <div className="booking_banner-overlay" />
        <div className="container ">
          <form className="s12  center-align">
            <div className="row ">
              <div class="input-field col s12 l4">
                <select>
                  <option value="" selected>
                    Choose your option
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <label>Coaching Style</label>
              </div>
              <div class="input-field col s12 l4">
                <select>
                  <option value="" selected>
                    Choose your option
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <label>Mode of coaching</label>
              </div>
              <div className="col s12 l4 center">
                <Link
                  href="#"
                  className="white-text btn-small z-depth-2   orange_site-bg waves-effect waves-light  "
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookBanner;
