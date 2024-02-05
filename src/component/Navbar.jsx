import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";





const Navbar = () => {
  return (
    <>
      <div className="container pb-3">
        <div className="row">
          <div className="col-12-md ">
            <nav className="navbar fixed-top navbar-expand-sm bg-body-tertiary">
              {/* <div className="container-fluid"> */}
              <a className="navbar-brand" id="brand" to="/">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse ms-auto-md" id="navbarNavAltMarkup">
                <div className="ms-auto me-end-md navbar-nav">
                  <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/about">About</NavLink>
                  <NavLink className="nav-link" to="/service">Services</NavLink>
                  <NavLink className="nav-link" to="/contect">Contect</NavLink>
                </div>
              </div>
              {/* </div> */}
            </nav>
          </div>
        </div>
      </div>

        


    </>

  );
};




export default Navbar;
