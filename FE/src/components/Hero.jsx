// HeroSection.jsx
import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Apply data-bg-src as background image
    document.querySelectorAll("[data-bg-src]").forEach((el) => {
      const src = el.getAttribute("data-bg-src");
      if (src) {
        el.style.backgroundImage = `url(${src})`;
      }
    });

    // Apply data-mask-src as mask image
    document.querySelectorAll("[data-mask-src]").forEach((el) => {
      const src = el.getAttribute("data-mask-src");
      if (src) {
        el.style.maskImage = `url(${src})`;
        el.style.webkitMaskImage = `url(${src})`; // for Safari
      }
    });
  }, []);

  return (
    <div
      className="th-hero-wrapper hero-2"
      id="hero"
      data-mask-src="assets/img/bg/hero_bg_shape.png"
    >
      <div
        className="th-hero-bg"
        data-bg-src="Hero.jpg"
      ></div>

      <div className="hero-style2">
        <h1 className="hero-title">
          Hydro
          <span className="hero-img">
            <img src=" " alt="" />
          </span>
          Power
        </h1>

        <div
  className="hero2-image th-anim"
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  }}
>
  <img
    src="Hero2.png"
    alt=""
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      borderRadius: "20px",
    }}
  />
  <span
    style={{
      position: "absolute",
      top: "65%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "sans-serif",
      fontWeight: 700,
      fontSize: "20px",
      color: "#010F1C",
      padding: "15px 25px",
      backgroundColor: "rgba(255,255,255,0.8)",
      borderRadius: "10px",
    }}
  >
    6719.11 GWh
  </span>
</div>


        <div className="hero-content">
          <p className="hero-text">
            Reliable run-of-river hydropower for Tamor–Mewa communities{" "}
            <span className="d-inline-block spin">
              <i className="fa-solid fa-sun"></i>
            </span>
          </p>

          <a href="/contact" className="th-btn style2 th-icon">
            <span
              className="btn-text"
              data-back="Discover more"
              data-front="Discover more"
            ></span>
            <i className="fa-regular fa-arrow-right ms-2"></i>
          </a>
          <a href="/contact" className="th-btn style2 th-icon">
            <span
              className="btn-text"
              data-back="Partner with us"
              data-front="Partner with us"
            ></span>
            <i className="fa-regular fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
