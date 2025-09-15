import React from "react";
import ContactForm from "./ContactPage/ContactForm";

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
              <ContactForm/>
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
