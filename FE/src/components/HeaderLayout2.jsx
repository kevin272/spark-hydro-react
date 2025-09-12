export default function Header() {
  return (
    <header className="th-header header-layout2 header-absolute">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-auto d-none d-md-block">
              <div className="header-links">
                <ul>
                  <li className="d-none d-xl-inline-block">
                    <i className="fa-light fa-clock"></i>
                    <span>Mon–Fri: 9:00–18:00 | Sat: 9:00–13:00 | Sun: Closed</span>
                  </li>
                  <li>
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                    <span>
                      2nd Floor, Team Ventures Building, Sinamangal, Kathmandu, Nepal (P.O. Box: 21759)
                    </span>
                  </li>
                  <li>
                    <i className="fa-regular fa-envelope"></i>
                    <a href="mailto:info.sparkhydro@gmail.com">info.sparkhydro@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="social-links">
                <span className="social-title">Follow Us On:</span>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Menu Area */}
      <div className="sticky-wrapper">
        <div className="container">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              {/* Logo */}
              <div className="col-auto">
                <div className="header-logo">
                  <a href="/"><img src="/assets/img/logo.svg" alt="Spark Hydroelectric Company Limited" /></a>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-auto">
                <nav className="main-menu style2 d-none d-lg-inline-block">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li className="menu-item-has-children">
                      <a href="#">Projects</a>
                      <ul className="sub-menu">
                        <li><a href="/service">Tamor–Mewa</a></li>
                      </ul>
                    </li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/careers">Careers</a></li>
                  </ul>
                </nav>
                <div className="header-button d-lg-none">
                  <button type="button" className="th-menu-toggle d-inline-block d-lg-none">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>

              {/* Right Buttons */}
              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <a href="/contact" className="th-btn style2 th-icon">
                    <span className="btn-text" data-back="Get a Quote" data-front="Get a Quote"></span>
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
