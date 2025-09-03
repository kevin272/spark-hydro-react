import React from "react";

const Goals = () => {
  return (
    <div
      className="choose-area overflow-hidden bg-smoke2 space"
      data-bg-src="https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <div className="container">
        <div className="row gy-4">
          {/* Left Column */}
          <div className="col-xxl-6">
            <div className="pe-xl-4">
              <div className="choose-image global-img">
                <img
                  src="https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-2.jpeg"
                  alt=""
                />
              </div>

              <div className="choose-item_wrapp">
                <div className="choose-item">
                  <div className="box-icon">
                    <img src="assets/img/icon/choose_1_1.svg" alt="" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">Our Mission</h3>
                    <p className="box-text">
                      To deliver clean, reliable hydropower that uplifts
                      communities and supports national energy security.
                    </p>
                  </div>
                </div>

                <div className="choose-item">
                  <div className="box-icon">
                    <img src="assets/img/icon/choose_1_2.svg" alt="" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">Our Vision</h3>
                    <p className="box-text">
                      To become a leading example of responsible
                      hydropower—balancing development with ecological
                      stewardship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xxl-6">
            <div className="ps-xl-5">
              <div className="title-area mb-30">
                <span className="sub-title">Why Choose Us Our Services</span>
                <h2 className="sec-title sec-title2">
                  Empowering Communities with Sustainable Hydropower
                </h2>
                <p>
                  At Spark Hydro, hydropower means more than electricity—it
                  empowers people and protects nature. Our Tamor–Mewa Project is
                  built on sustainability, transparency, and care. Together, we’re
                  driving Nepal toward a cleaner, resilient energy future.
                </p>
              </div>
            </div>

            <div className="choose-wrapper">
              <div className="choose-discount">
                <div className="discount-wrapp style3">
                  <h2 className="counter">
                    <span className="counter-number">25</span>
                  </h2>
                  <div className="discount-tag">
                    <span className="discount-anime">
                      years of Hydropower Development
                    </span>
                  </div>
                </div>

                <div className="choose-item">
                  <div className="box-icon">
                    <img src="assets/img/icon/choose_1_3.svg" alt="" />
                  </div>
                  <div className="box-content">
                    <h3 className="box-title">Our Goals</h3>
                    <p className="box-text">
                      Expand renewable capacity, empower local communities, and
                      set new benchmarks for sustainable infrastructure in Nepal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="choose-image2 global-img">
                <img
                  src="https://www.sparkhydro.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-18-at-12.41.33-PM-5.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
