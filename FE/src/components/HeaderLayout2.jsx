import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeaderLayout2() {
  const [projects, setProjects] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseURL = import.meta.env.VITE_API_URL || "";
        const res = await fetch(`${baseURL}/projects`);
        const data = await res.json();
        if (data.success && data.data) {
          setProjects(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchProjects();
  }, []);

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
                    <span>
                      Mon–Fri: 9:00–18:00 | Sat: 9:00–13:00 | Sun: Closed
                    </span>
                  </li>
                  <li>
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                    <span>
                      2nd Floor, Team Ventures Building, Sinamangal, Kathmandu,
                      Nepal (P.O. Box: 21759)
                    </span>
                  </li>
                  <li>
                    <i className="fa-regular fa-envelope"></i>
                    <a href="mailto:info.sparkhydro@gmail.com">
                      info.sparkhydro@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="social-links">
                <span className="social-title">Follow Us On:</span>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/">
                  <i className="fab fa-youtube"></i>
                </a>
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
                  <Link to="/">
                    <img
                      src="/assets/img/logo.svg"
                      alt="Spark Hydroelectric Company Limited"
                    />
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-auto">
                {/* Desktop Menu */}
                <nav className="main-menu style2 d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Projects</a>
                      <ul className="sub-menu">
                        {projects.map((project) => (
                          <li key={project._id}>
                            <Link to={`/projects/${project._id}`}>
                              {project.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                  </ul>
                </nav>

                {/* Mobile Toggle Button */}
                <div className="header-button d-lg-none">
                  <button
                    type="button"
                    className="th-menu-toggle d-lg-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <i
                      className={`far ${
                        mobileMenuOpen ? "fa-times" : "fa-bars"
                      }`}
                    ></i>
                  </button>
                </div>
              </div>

              {/* Right Buttons */}
              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <Link to="/contact" className="th-btn style2 th-icon">
                    <span
                      className="btn-text"
                      data-back="Get a Quote"
                      data-front="Get a Quote"
                    ></span>
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="th-menu-wrapper th-body-visible d-lg-none">
                <div className="th-menu-area text-center">
                  {/* Close Button */}
                  <button
                    className="th-menu-toggle"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <i className="fal fa-times"></i>
                  </button>

                  {/* Mobile Logo */}
                  <div className="mobile-logo">
                    <Link to="/">
                      <img
                        src="/assets/img/logo.svg"
                        alt="Spark Hydroelectric Company Limited"
                      />
                    </Link>
                  </div>

                  {/* Menu List */}
                  <div className="th-mobile-menu">
                    <ul>
                      <li>
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About Us
                        </Link>
                      </li>
                      <li
                        className={`menu-item-has-children th-item-has-children ${
                          projectsOpen ? "open" : ""
                        }`}
                      >
                        <button
                          className="w-full text-left flex justify-between items-center"
                          onClick={() => setProjectsOpen(!projectsOpen)}
                        >
                          Projects <span className="th-mean-expand"></span>
                        </button>
                        {projectsOpen && (
                          <ul className="sub-menu th-submenu">
                            {projects.map((project) => (
                              <li key={project._id}>
                                <Link
                                  to={`/projects/${project._id}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {project.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                      <li>
                        <Link
                          to="/gallery"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/careers"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
