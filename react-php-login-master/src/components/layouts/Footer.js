import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>

      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com/" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.google.com/" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
          
            <a href="https://www.linkedin.com/feed/" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
         
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />Alexandria Interior Design
                </h6>
                <p>
                  Often simply called the World Cup, is an international association football competition contested by the senior men's national teams of the members of the Fédération Internationale de Football Association, the sport's global governing body
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <Link to={""} className="text-reset">About</Link>
                </p>
                <p>
                  <a href="#!" className="text-reset">Our Services</a>
                </p>

              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3" />Amman, Jordan</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  Interiordesign@Alexandria.com
                </p>
                <p><i className="fas fa-phone me-3" /> 00962 234 567 88</p>
                <p><i className="fas fa-print me-3" /> 00962 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Interiordesign-Alexandria</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}


    </>
  );
}

export default Footer;
