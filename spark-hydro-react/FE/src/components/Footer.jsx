import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper bg-title footer-layout1"
      data-bg-src="https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?semt=ais_hybrid&w=740&q=80"
    >
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            {/* Column 1: About */}
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="/">
                      <img src="assets/img/logo.svg" alt="Spark Hydro" />
                    </a>
                  </div>
                  <p className="about-text">
                    Spark Hydro is committed to developing clean, reliable, and
                    sustainable hydropower for Nepal. Our flagship Tamor–Mewa
                    Hydroelectric Project (128 MW) reflects our mission to
                    balance energy generation with environmental care and
                    community growth.
                  </p>
                  <div className="th-social">
                    <a href="https://facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="https://youtube.com/">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Useful Links</h3>
                <ul className="menu">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/service">Projects</a>
                  </li>
                  <li>
                    <a href="/project">Projects</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Services */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Projects</h3>
                <ul className="menu">
                  <li>
                    <a href="/service">Tamor Mewa</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact Us</h3>
                <div className="th-widget-about">
                  <p className="footer-info">
                    <i className="fas fa-map-marker-alt" />
                    2nd Floor, Team Ventures Building, Sinamangal, Kathmandu,
                    Nepal <br />
                    P.O. Box: 21759
                  </p>
                  <p className="footer-info">
                    <i className="fa-solid fa-phone" />
                    <a href="tel:+97715902484">+977-1-5902484</a>
                  </p>
                  <p className="footer-info">
                    <i className="fa-solid fa-envelope" />
                    <a href="mailto:info.sparkhydro@gmail.com">
                      info.sparkhydro@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-wrap text-center">
        <p className="copyright-text">
          Copyright <i className="fal fa-copyright" /> 2025{" "}
          <a href="#">Spark Hydro</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
