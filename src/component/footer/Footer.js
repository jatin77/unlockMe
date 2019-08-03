import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="section footer_above ">
        <div className="row ">
          <div className="footer-col1">
            <p className="flow-text">Information</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </div>
          <div className="footer-col2">
            <p className="flow-text">Company Policy</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-col3">
            <p className="flow-text">Partner with Us</p>
            <p>For Corporate</p>
            <p>For Investors</p>
          </div>
          <div className="footer-col4">
            <h5 className="orange_site-text">Unlock me today</h5>
            <p className="flow-text orange_site-text">We solve problems</p>
            <Link
              to=""
              className="white-text btn-small z-depth-2   orange_site-bg waves-effect waves-light  "
            >
              Appointment
            </Link>
            <p>
              <small>
                <b>Contact us</b>
              </small>
            </p>
            <p>0120-22615423</p>
            <p>lorem.ipsum@gmail.com</p>
          </div>
        </div>
      </section>
      <footer className="page-footer white">
        <div className="footer-copyright my-foot">
          <div className="container  center grey-text text-darken-4">
            &copy; 2019 <img src="/imgs/umt_image.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
