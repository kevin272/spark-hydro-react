import React from "react";

function ServicesSection() {
  return (
    <section
      className="overflow-hidden space"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1751780247095-651fc13047ff?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-5">
          <div className="title-area text-center">
            <span className="sub-title">Our Services</span>
            <h2 className="sec-title">
              Specialized Hydropower Solutions for Nepal’s Energy Future
            </h2>
          </div>
        </div>
      </div>

      <div className="slider-area">
        <div
          className="swiper th-slider has-shadow"
          id="serviceSlide2"
          data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
        >
          <div className="swiper-wrapper">
            {/* Service 1 */}
            <div className="swiper-slide">
              <div className="service-box">
                <div className="box-content">
                  <div className="box-icon">
                    <img src="assets/img/icon/service_1_1.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="service-details.html">
                      Hydrology &amp; Feasibility Studies
                    </a>
                  </h3>
                  <p className="box-text">
                    Our expert team conducts in-depth river flow, topography, and
                    resource assessments to design bankable, sustainable hydropower
                    projects.
                  </p>
                  <a
                    href="service.html"
                    className="th-btn border-btn th-icon fw-medium text-uppercase"
                  >
                    <span
                      className="btn-text"
                      data-back="Vew Details"
                      data-front="Vew Details"
                    />
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="swiper-slide">
              <div className="service-box">
                <div className="box-content">
                  <div className="box-icon">
                    <img src="assets/img/icon/service_1_2.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="service-details.html">
                      Licensing &amp; Environmental Compliance
                    </a>
                  </h3>
                  <p className="box-text">
                    From Environmental Impact Assessments (EIA) to government
                    approvals, we manage every regulatory requirement with
                    precision and transparency.
                  </p>
                  <a
                    href="service.html"
                    className="th-btn border-btn th-icon fw-medium text-uppercase"
                  >
                    <span
                      className="btn-text"
                      data-back="Vew Details"
                      data-front="Vew Details"
                    />
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="swiper-slide">
              <div className="service-box">
                <div className="box-content">
                  <div className="box-icon">
                    <img src="assets/img/icon/service_1_3.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="service-details.html">Engineering &amp; Design</a>
                  </h3>
                  <p className="box-text">
                    Comprehensive civil, electro-mechanical, and transmission
                    designs—optimized for performance, safety, and long-term
                    reliability.
                  </p>
                  <a
                    href="service.html"
                    className="th-btn border-btn th-icon fw-medium text-uppercase"
                  >
                    <span
                      className="btn-text"
                      data-back="Vew Details"
                      data-front="Vew Details"
                    />
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="swiper-slide">
              <div className="service-box">
                <div className="box-content">
                  <div className="box-icon">
                    <img src="assets/img/icon/service_1_4.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="service-details.html">
                      Construction &amp; Commissioning
                    </a>
                  </h3>
                  <p className="box-text">
                    Our professional installation service ensures that your solar
                    panels are set up efficiently and securely for maximum
                    sunlight exposure.
                  </p>
                  <a
                    href="service.html"
                    className="th-btn border-btn th-icon fw-medium text-uppercase"
                  >
                    <span
                      className="btn-text"
                      data-back="Vew Details"
                      data-front="Vew Details"
                    />
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Slider Arrows */}
            <div className="service-arrow">
              <div className="icon-box">
                <button
                  data-slider-prev="#serviceSlide2"
                  className="slider-arrow default"
                >
                  <i className="far fa-arrow-left"></i>
                </button>
                <button
                  data-slider-next="#serviceSlide2"
                  className="slider-arrow default"
                >
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
