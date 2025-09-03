
export default function Header() {
  return (
    <header className="th-header header-layout2 header-absolute">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-auto d-none d-md-block">
              <ul className="header-links">
                <li>
                  <i className="fa-light fa-clock"></i>
                  Mon–Fri: 9:00–18:00 | Sat: 9:00–13:00 | Sun: Closed
                </li>
                <li>
                  <i className="fa-sharp fa-regular fa-location-dot"></i>
                  2nd Floor, Team Ventures Building, Sinamangal, Kathmandu
                </li>
                <li>
                  <i className="fa-regular fa-envelope"></i>
                  <a href="mailto:info.sparkhydro@gmail.com">info.sparkhydro@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <div className="social-links">
                <span>Follow Us On:</span>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky-wrapper">
        <div className="container">
          <div className="menu-area row align-items-center justify-content-between">
            <div className="col-auto">
              <a href="/"><img src="/assets/img/logo.svg" alt="Logo" /></a>
            </div>
            <div className="col-auto">
              <nav className="main-menu style2 d-none d-lg-inline-block">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/service">Projects</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/careers">Careers</a></li>
                </ul>
              </nav>
              <button className="th-menu-toggle d-lg-none"><i className="far fa-bars"></i></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
