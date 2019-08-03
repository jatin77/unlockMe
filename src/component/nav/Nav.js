import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { RoomContext } from "../../context";
const Nav = () => {
  const { selectedStyle, page } = useContext(RoomContext);

  useEffect(() => {
    var sidenav = document.querySelector(".sidenav");
    var instance1 = M.Sidenav.init(sidenav, {});
    let dropdown = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdown, {
      inDuration: 300,
      outDuration: 225,
      closeOnClick: true
    });
    var modal = document.querySelectorAll(".modal");
    var instanc2 = M.Modal.init(modal, {});
  }, []);
  return (
    <>
      <nav className="transparent ">
        <div className="nav-wrapper ">
          <Link to="" className="brand-logo">
            <img src="/imgs/umt_image.png" alt="brand_logo" />
          </Link>

          <Link data-target="slide-out" to="" className="sidenav-trigger">
            <i className="material-icons grey-text text-darken-4">menu</i>
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink
                activeClassName="nav_active"
                exact
                to="/"
                className="grey-text text-darken-4 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="nav_active"
                to="/about"
                className="grey-text text-darken-4 "
              >
                About
              </NavLink>
            </li>
            {/* Dropdown Trigger */}
            <li>
              <NavLink
                activeClassName="nav_active"
                className="dropdown-trigger grey-text text-darken-4"
                to="/coachingStyles"
                data-target="dropdown1"
              >
                Coaching Styles
                <i className="material-icons right">arrow_drop_down</i>
              </NavLink>
            </li>
            <li>
              <NavLink to="" className="grey-text text-darken-4 ">
                Finding Your Coaching Style
              </NavLink>
            </li>
            {/* modal trigger */}
            <li>
              <a
                href="#modal1"
                className="red-text text-accent-3 modal-close modal-trigger"
              >
                Login
              </a>
              {/* <!-- Modal Structure --> */}

              <div id="modal1" className="modal black ">
                <div className="modal-content center">
                  <h4 className="center grey-text text-lighten-2">
                    <b>Sign in</b>
                  </h4>
                  <p className="modal-social-links">
                    {" "}
                    <button className="btn-floating facebook-blue btn-large waves-effect waves-light red">
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button className="btn-floating google-multi btn-large waves-effect waves-light red">
                      <i className="fab fa-google" />
                    </button>
                  </p>
                  <p className=" modal-use-acc-txt grey-text text-lighten-2">
                    or use your{" "}
                    <span className="center red-text text-accent-3">
                      account
                    </span>
                  </p>
                  <div className="container ">
                    <div className="row">
                      <form className="col s12 ">
                        <div className="row">
                          <div className="input-field col s8 offset-s2 ">
                            <i className="material-icons  prefix">
                              account_circle
                            </i>
                            <input
                              id="email"
                              type="email"
                              className="validate"
                            />
                            <label htmlFor="email">Email</label>
                          </div>
                          <div className="input-field col s8  offset-s2">
                            <i className="material-icons  prefix">vpn_key</i>
                            <input
                              id="password"
                              type="password"
                              className="validate"
                            />
                            <label htmlFor="password">Password</label>
                          </div>
                        </div>
                        <p className="grey-text text-darken-2 modal-forgot">
                          <small>
                            Forgot your{" "}
                            <span className="red-text text-accent-3">
                              {" "}
                              password ?
                            </span>
                          </small>
                        </p>
                        <Link
                          to=""
                          className="white-text btn-small red accent-3 waves-effect waves-light"
                        >
                          Signin <i className="material-icons right">person</i>
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>{" "}
            {/* <!-- Dropdown Trigger --> */}
            <li>
              <a
                className="dropdown-trigger white-text btn-small orange_site-bg waves-effect waves-light"
                href="#!"
                data-target="dropdown2"
              >
                Sign up<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* sidenav mobile */}
      <ul id="slide-out" className="sidenav grey-text text-darken-4 ">
        <li>
          <NavLink activeClassName="nav_active" exact to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="nav_active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav_active" to="/coachingStyles">
            Coaching Styles
          </NavLink>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <NavLink
            onClick={() => selectedStyle("career")}
            to="/coachingStyles"
            className="grey-text"
          >
            Career Coaching
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => selectedStyle("executive")}
            to="/coachingStyles"
            className="grey-text"
          >
            Executive Coaching
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => selectedStyle("performance")}
            to="/coachingStyles"
            className="grey-text"
          >
            Performance Coaching
          </NavLink>
        </li>
        <li>
          <Link to="" className="waves-effect" href="#!">
            Finding Your Coaching Style
          </Link>
        </li>
      </ul>
      {/* Dropdown Structure  1*/}
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <NavLink
            onClick={() => selectedStyle("career")}
            to="/coachingStyles"
            className="grey-text text-darken-1"
          >
            Career Coaching
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => selectedStyle("executive")}
            to="/coachingStyles"
            className="grey-text text-darken-1"
          >
            Executive Coaching
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={() => selectedStyle("performance")}
            to="/coachingStyles"
            className="grey-text text-darken-1"
          >
            Performance Coaching
          </NavLink>
        </li>
      </ul>
      {/* <!-- Dropdown Structure 2--> */}
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <Link to="" className="grey-text text-darken-1">
            Student
          </Link>
        </li>
        <li>
          <Link to="" className="grey-text text-darken-1">
            Employee
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
