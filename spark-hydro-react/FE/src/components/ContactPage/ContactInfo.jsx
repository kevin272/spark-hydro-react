const ContactInfo = () => (
  <div className="space">
    <div className="container">
      <div className="title-area text-center">
        <h2 className="sec-title">Our Contact Information</h2>
      </div>
      <div className="row gy-4">
        {/* Address */}
        <div className="col-xl-4 col-md-6">
          <div className="contact-media">
            <div className="icon-btn">
              <i className="fa-sharp fa-light fa-location-dot"></i>
            </div>
            <div className="media-body">
              <h5 className="box-title">Our Address</h5>
              <p className="box-text">
                2nd Floor, Team Ventures Building, Sinamangal, Kathmandu, Nepal <br />
                P.O. Box: 21759
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="col-xl-4 col-md-6">
          <div className="contact-media">
            <div className="icon-btn">
              <i className="fa-light fa-phone"></i>
            </div>
            <div className="media-body">
              <h5 className="box-title">Contact Number</h5>
              <p className="box-text">
                <a href="tel:+97715902484">Phone: +977-1-5902484</a><br />
                <a href="mailto:info.sparkhydro@gmail.com">Email: info.sparkhydro@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="col-xl-4 col-md-6">
          <div className="contact-media">
            <div className="icon-btn">
              <i className="fa-light fa-clock"></i>
            </div>
            <div className="media-body">
              <h5 className="box-title">Opening Hours</h5>
              <p className="box-text">
                Monday – Friday: 9:00 AM – 6:00 PM <br />
                Saturday: 9:00 AM – 1:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfo;
