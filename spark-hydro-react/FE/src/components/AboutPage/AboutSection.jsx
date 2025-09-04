const AboutSection = () => (
  <div className="about-area overflow-hidden space" id="about-sec">
    <div className="container">
      <div className="row gy-4">
        <div className="col-xl-7 mb-30 mb-xl-0">
          <div className="img-box3">
            <div className="img1">
              <img src="assets/img/about1.jpg" alt="About Image 1" />
            </div>
            <div className="img2">
              <img src="assets/img/about2.jpg" alt="About Image 2" />
            </div>
            <div className="about-wrapp">
              <div className="discount-wrapp style2">
                <h2 className="box-counter"><span className="counter-number">25</span></h2>
                <div className="discount-tag">
                  <span className="discount-anime">Spark-hydro since 2000</span>
                </div>
              </div>
            </div>
            <div className="about-shape">
              <img src="assets/img/shape/shape-4.png" alt="Shape" />
            </div>
          </div>
        </div>
        <div className="col-xl-5">
          <div className="ps-xxl-5 ms-xxl-5 me-xl-2">
            <div className="title-area mb-40">
              <span className="sub-title">Spark Hydroelectric Company Limited</span>
              <h2 className="sec-title">We Strive to Lead Nepal’s Future in Hydropower</h2>
            </div>
            <p className="mb-25">
                Hydropower is Nepal’s greatest natural asset. Since 1999, Spark Hydro has been working to transform the abundant flow of rivers into sustainable, reliable, and eco-friendly power. Our flagship Tamor–Mewa Hydroelectric Project (128 MW, expandable to 145 MW) is not just about energy—it’s about empowering communities, creating jobs, and building a cleaner tomorrow.
            </p>
            <div className="checklist list-two-column mb-20">
              <ul>
                <li><i className="fa-sharp fa-solid fa-badge-check" />Clean and Renewable</li>
                <li><i className="fa-sharp fa-solid fa-badge-check" />Energy Independence</li>
                <li><i className="fa-sharp fa-solid fa-badge-check" />Community Focused</li>
                <li><i className="fa-sharp fa-solid fa-badge-check" />Long-Term Reliability</li>
              </ul>
            </div>
            <div className="about-profile">
              <div className="signature">
                <img src="assets/img/normal/signature.svg" alt="signature" />
              </div>
              <h3 className="box-title">Sudip Kumar Chaudhary</h3>
              <p className="box-text">Managing Director, Spark Hydro</p>
            </div>
            <div className="btn-group mt-30 justify-content-start">
              <a href="/contact" className="th-btn black-btn th-icon">
                <span className="btn-text" data-back="More About Us" data-front="More About Us" />
                <i className="fa-regular fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
