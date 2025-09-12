import React from "react";

const ContactArea = () => {
  return (
    <div
      className="pt-50 pb-50 overflow-hidden"
      data-bg-src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-4">
            <div className="contact-wrapp">
              <div className="discount-wrapp style3">
                <a
                  href="https://www.youtube.com/watch?v=srUvr0iBCLI"
                  className="play-btn popup-video"
                >
                  <i className="fa-solid fa-play"></i>
                </a>
                <div className="discount-tag">
                  <span className="discount-anime">Spark-hydro since in 2000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="me-xl-5 pe-xl-5">
              <form action="mail.php" method="POST" className="contact-form ajax-contact">
                <span className="sub-title style1">CONTACT US</span>
                <h2 className="mb-30">Get In Touch</h2>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" placeholder="Your name" className="form-control" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="text" placeholder="Email address" className="form-control" />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <select name="subject" id="subject" className="form-select nice-select">
                      <option value="" disabled hidden>
                        Select an Option
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Project Information">Project Information</option>
                      <option value="Careers">Careers</option>
                      <option value="Media & Press">Media & Press</option>
                    </select>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      className="form-control"
                      placeholder="Write a message"
                    ></textarea>
                  </div>
                  <div className="col-12 form-group mb-0 text-center">
                    <button className="th-btn black-btn fw-btn">
                      <span className="btn-text" data-back="Send Messages" data-front="Send Messages"></span>
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="shape-mockup h-100 th-parallax d-none d-xl-block"
        data-top="0%"
        data-left="0%"
      >
        <img
          src="https://images.unsplash.com/photo-1606050309588-741702cceb9b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "100%", height: "auto", filter: "brightness(40%)" }}
        />
      </div>

      <div className="shape-mockup d-none d-xl-block" data-bottom="0%" data-right="0%">
        <img
          src="https://plus.unsplash.com/premium_photo-1669658981858-b2ae0d7581a3?q=80&w=854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "100%", height: 728 }}
        />
      </div>
    </div>
  );
};

export default ContactArea;
