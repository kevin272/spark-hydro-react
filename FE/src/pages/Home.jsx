import React, { useState } from 'react';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import Goals from '../components/Goals';
import ContactArea from '../components/Contact';
import ProjectsSection from '../components/Projects';
import HeroSection from '../components/Hero';
import HeaderLayout2 from '../components/HeaderLayout2';
import ServicesSection from '../components/HomePage/ServicesSection';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@100..800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
    rel="stylesheet"
  />
  {/*==============================
	    All CSS File
	============================== */}
  {/* Bootstrap */}
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  {/* Fontawesome Icon */}
  <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
  {/* Magnific Popup */}
  <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
  {/* Swiper Slider */}
  <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
  {/* Theme Custom CSS */}
  <link rel="stylesheet" href="assets/css/style.css" />
  {/*[if lte IE 9]>
    	<p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
  {/*********************************
   		Code Start From Here 
	******************************** */}
  <div className="cursor-follower" />
  {/* slider drag cursor */}
  <div className="slider-drag-cursor">
    <img src="assets/img/icon/arrow.svg" alt="" />
  </div>
  {/*==============================
     Preloader
  ==============================*/}
  {/* <div className="preloader ">
  <button className="th-btn style1 preloaderCls">Cancel Preloader </button>
  <div className="preloader-inner">
      <img src="assets/img/logo.svg" alt="Rasm">
      <span className="loader"></span>
  </div>
    </div> */}{" "}
  {/*==============================
    Sidemenu
============================== */}
  <div className="sidemenu-wrapper d-none d-lg-block">
    <div className="sidemenu-content">
      <button className="closeButton sideMenuCls">
        <i className="far fa-times" />
      </button>
      {/* About Company */}
      <div className="widget footer-widget">
        <h3 className="widget_title">About Spark Hydro</h3>
        <div className="th-widget-about">
          <p className="about-text">
            Spark Hydro delivers innovative hydropower and clean energy
            solutions. We focus on sustainability, efficiency, and powering a
            greener future.
          </p>
          <div className="th-social">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
      {/* Recent Posts */}
      <div className="widget footer-widget">
        <h3 className="widget_title">Recent Insights</h3>
        <div className="recent-post-wrap">
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img src="assets/img/blog/hydro-1.jpg" alt="Blog Image" />
              </a>
            </div>
            <div className="media-body">
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="fa-sharp fa-solid fa-calendar-days" />
                  21 Feb, 2025
                </a>
              </div>
              <h4 className="post-title">
                <a className="text-inherit" href="blog-details.html">
                  Hydropower: The Backbone of Renewable Energy
                </a>
              </h4>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img src="assets/img/blog/hydro-2.jpg" alt="Blog Image" />
              </a>
            </div>
            <div className="media-body">
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="fa-sharp fa-solid fa-calendar-days" />
                  22 Feb, 2025
                </a>
              </div>
              <h4 className="post-title">
                <a className="text-inherit" href="blog-details.html">
                  Clean Water to Clean Energy: Our Approach
                </a>
              </h4>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img src="assets/img/blog/hydro-3.jpg" alt="Blog Image" />
              </a>
            </div>
            <div className="media-body">
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="fa-sharp fa-solid fa-calendar-days" />
                  23 Feb, 2025
                </a>
              </div>
              <h4 className="post-title">
                <a className="text-inherit" href="blog-details.html">
                  The Future of Sustainable Power in Nepal
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Popup Search */}
  <div className="popup-search-box d-none d-lg-block">
    <button className="searchClose">
      <i className="fal fa-times" />
    </button>
    <form action="#">
      <input
        type="text"
        placeholder="Search articles, projects, or insights..."
      />
      <button type="submit">
        <i className="fal fa-search" />
      </button>
    </form>
  </div>
 

      {/*==============================
        Header (pass toggle to header)
      ============================== */}
<HeaderLayout2
  isMenuOpen={isMenuOpen}
  onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
/>

  {/*==============================
Hero Area
==============================*/}
<HeroSection/>
  {/*======== / Hero Section ========*/}
  {/*==============================
About Area  
==============================*/}
  <div className="overflow-hidden space overflow-hidden" id="about-sec">
    <div className="container">
      <div className="row gx-0 gy-4 align-items-end">
        <div className="col-xl-7">
          <div className="title-area mb-40 pe-xl-5 me-xl-5">
            <span className="sub-title">About Us</span>
            <h2 className="sec-title ">
              Powering Nepal’s Future with Clean Hydropower
            </h2>
          </div>
          <div className="row gx-0 align-items-end">
            <div className="col-lg-5">
              <div className="img-box4">
                <div className="img1">
                  <img
                    src="https://images.unsplash.com/photo-1466975656732-e70d9b542a09?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About"
                  />
                </div>
                {/* 50% Workforce from Local Communities */}
                <div className="th-progress" data-progress-value={50}>
                  <svg viewBox="0 0 110 60" className="progress-bars">
                    <defs>
                      <linearGradient
                        id="gradient2"
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={1}
                      >
                        <stop offset="0%" stopColor="#4FC3F7" />
                        <stop offset="100%" stopColor="#4FC3F7" />
                      </linearGradient>
                    </defs>
                    <path
                      className="grey"
                      d="M30,90 A40,40 0 1,1 80,90"
                      fill="none"
                      stroke="#E0E0E0"
                      strokeWidth={5}
                    />
                    <path
                      className="half-circle"
                      d="M30,90 A40,40 0 1,1 80,90"
                      fill="none"
                      stroke="url(#gradient2)"
                      strokeWidth={5}
                      strokeDasharray="251.2"
                      strokeDashoffset="251.2"
                    />
                    <text
                      x={55}
                      y={55}
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      50%
                    </text>
                  </svg>
                  <h3 className="box-title">
                    Workforce from Local Communities
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="progress-wrapper">
                {/* 60% Overall Project Construction Progress */}
                <div className="th-progress" data-progress-value={60}>
                  <svg viewBox="0 0 110 60" className="progress-bars">
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={1}
                      >
                        <stop offset="0%" stopColor="#57B33E" />
                        <stop offset="100%" stopColor="#57B33E" />
                      </linearGradient>
                    </defs>
                    <path
                      className="grey"
                      d="M30,90 A40,40 0 1,1 80,90"
                      fill="none"
                      stroke="#E0E0E0"
                      strokeWidth={5}
                    />
                    <path
                      className="half-circle"
                      d="M30,90 A40,40 0 1,1 80,90"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth={5}
                      strokeDasharray="251.2"
                      strokeDashoffset="251.2"
                    />
                    <text
                      x={55}
                      y={55}
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      60%
                    </text>
                  </svg>
                  <h3 className="box-title">
                    Overall Project Construction Progress
                  </h3>
                </div>
                <div className="divider" />
                {/* 55% Environmental & Regulatory Milestones Completed */}
                <div className="th-progress" data-progress-value={55}>
                  <svg viewBox="0 0 110 60" className="progress-bars">
                    <defs>
                      <linearGradient
                        id="gradient3"
                        x1={0}
                        y1={0}
                        x2={0}
                        y2={1}
                      >
                        <stop offset="0%" stopColor="#FFFA84" />
                        <stop offset="100%" stopColor="#FFFA84" />
                      </linearGradient>
                    </defs>
                    <path
                      className="grey"
                      d="M30,90 A40,40 0 1,1 80,90"
                      fill="none"
                      stroke="#E0E0E0"
                      strokeWidth={5}
                    />
                    <path
                      className="half-circle"
                      d="M30,90 A40,40 0 1,1 80,90"
                      fill="none"
                      stroke="url(#gradient3)"
                      strokeWidth={5}
                      strokeDasharray="251.2"
                      strokeDashoffset="251.2"
                    />
                    <text
                      x={55}
                      y={55}
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      55%
                    </text>
                  </svg>
                  <h3 className="box-title">
                    Environmental &amp; Regulatory Milestones Completed
                  </h3>
                </div>
                <div className="divider" />
                {/* 48% Domestic Procurement Percentage */}
                {/* <div className="th-progress" data-progress-value="48">
                          <svg viewBox="0 0 110 60" className="progress-bars">
                              <defs>
                                  <linearGradient id="gradient4" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stop-color="#FF7043" />
                                      <stop offset="100%" stop-color="#FF7043" />
                                  </linearGradient>
                              </defs>
                              <path className="grey" d="M30,90 A40,40 0 1,1 80,90"
                                    fill="none" stroke="#E0E0E0" stroke-width="5" />
                              <path className="half-circle" d="M30,90 A40,40 0 1,1 80,90"
                                    fill="none" stroke="url(#gradient4)" stroke-width="5"
                                    stroke-dasharray="251.2" stroke-dashoffset="251.2" />
                              <text x="55" y="55" dominant-baseline="middle" text-anchor="middle">48%</text>
                          </svg>
                          <h3 className="box-title">Domestic Procurement Percentage</h3>
                      </div> */}
              </div>
              <div className="img-box5">
                <div className="img1">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1727344751168-03790785caf2?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <p className="mb-35">
            We begin with careful planning and consultation to understand
            Nepal’s growing energy needs. Spark Hydro conducts site assessments,
            hydrological studies, and environmental reviews to design solutions
            that balance reliability with sustainability. Through collaboration
            with top engineering partners, we ensure world-class design,
            compliance with all government requirements, and seamless project
            execution. From feasibility to commissioning, we’re committed to
            powering the nation while uplifting communities and protecting the
            environment.
          </p>
          <div className="btn-group justify-content-between align-items-start">
            <a href="/about" className="th-btn black-btn style1 th-icon">
              <span
                className="btn-text"
                data-back="More About Us"
                data-front="More About Us"
              />
              <i className="fa-regular fa-arrow-right ms-2" />
            </a>
            <div className="about-profile style2">
              <div className="signature">
                <img src="assets/img/normal/signature2.svg" alt="signature" />
              </div>
              <h3 className="box-title h4">Sudip Kumar Chaudhary</h3>
              <p className="box-text">Managing Director, Spark Hydro</p>
            </div>
          </div>
          <div className="img-box6">
            <div className="img1">
              <img
                src="https://images.unsplash.com/photo-1655921779883-748ca0cb8372?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About"
                style={{ width: 650, height: 558, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Service Area  
==============================*/}
<ServicesSection/>
  <div
    className="marquee-area space-extra"
    data-bg-src="https://www.sparkhydro.com/wp-content/uploads/2024/11/imager-3.png"
  >
    <div className="marquee-content positive-relative overflow-hidden">
      <div className="marquee">
        {/* First group */}
        <div className="marquee-group">
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Clean Energy</span>
          </div>
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Hydropower Solutions</span>
          </div>
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Sustainable Design</span>
          </div>
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Grid Connection</span>
          </div>
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Research &amp; Innovation</span>
          </div>
        </div>
        {/* Second group (for continuous scrolling) */}
        <div aria-hidden="true" className="marquee-group">
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Clean Energy</span>
          </div>
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Hydropower Solutions</span>
          </div>
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Sustainable Design</span>
          </div>
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Grid Connection</span>
          </div>
          <div className="item">
            <img src="assets/img/icon/star.svg" alt="" />
            <span>Research &amp; Innovation</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Team Area  
==============================*/}
  {/*==============================
Project Area  
==============================*/}

<ProjectsSection/>

  <ContactArea/>
   <Goals/>
<Counter/>
  

  <div className="scroll-top">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      ></path>
    </svg>
  </div>


</>
  );
};

export default Home;