import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axios.config";

export default function HeaderLayout1() {

  const [projects, setProjects] = useState([]);

  // Fetch projects dynamically from your API
    useEffect(() => {
  const fetchProjects = async () => {
    try {
      const baseURL = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${baseURL}/projects`);
      const data = await res.json();
      if (data.success && data.data) {
        setProjects(data.data);
        console.log("Projects fetched:", data.data);
      }
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  };

  fetchProjects();
}, []);


  useEffect(() => {
    const el = document.querySelector(".logo-bg");
    if (el && el.dataset.maskSrc) {
      el.style.maskImage = `url(${el.dataset.maskSrc})`;
      el.style.webkitMaskImage = `url(${el.dataset.maskSrc})`; // Safari/Chrome
      el.style.maskRepeat = "no-repeat";
      el.style.webkitMaskRepeat = "no-repeat";
      el.style.maskSize = "cover";
      el.style.webkitMaskSize = "cover";
      el.style.backgroundColor = "#fff"; // fallback fill (adjust to theme)
    }
  }, []);

  return (
    <header className="th-header header-layout1">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-md-between align-items-center">
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
                      Nepal
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
             
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              {/* Logo */}
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img src="/assets/img/logo.svg" alt="Spark Hydro Logo" />
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-auto me-xl-auto">
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
        <Link to={`/projects/${project._id}`}>{project.title}</Link>
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

                {/* Mobile Menu Toggle */}
                <div className="header-button">
                  <button
                    type="button"
                    className="th-menu-toggle d-inline-block d-lg-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>

              {/* Call Button */}
              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <a href="tel:+977-1-5902484" className="th-btn th-icon">
                    <span
                      className="btn-text"
                      data-back="Call for help: +977-1-5902484"
                      data-front="Call for help: +977-1-5902484"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Background Mask */}
          
        </div>

      </div>
    </header>
  );
}
