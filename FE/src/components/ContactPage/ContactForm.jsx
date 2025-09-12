const ContactForm = () => (
  <form className="contact-form2 input-smoke ajax-contact">
    <h3 className="h2 mt-n3 mb-25">Get In Touch</h3>
    <div className="row">
      <div className="form-group col-md-6">
        <input type="text" className="form-control" name="name" placeholder="Your Name" />
      </div>
      <div className="form-group col-md-6">
        <input type="email" className="form-control" name="email" placeholder="Email Address" />
      </div>
      <div className="form-group col-md-6">
        <input type="tel" className="form-control" name="number" placeholder="Phone Number" />
      </div>
      <div className="form-group col-md-6">
        <select name="subject" className="form-select nice-select">
          <option value="" disabled selected hidden>Select an Option</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Partnership">Partnership</option>
          <option value="Project Information">Project Information</option>
          <option value="Careers">Careers</option>
          <option value="Media & Press">Media & Press</option>
        </select>
      </div>
      <div className="form-group col-12">
        <textarea name="message" cols="30" rows="3" className="form-control" placeholder="Your Message"></textarea>
      </div>
      <div className="form-btn col-12">
        <button className="th-btn fw-btn">
          <span className="btn-text" data-back="Send Messages" data-front="Send Messages"></span>
        </button>
      </div>
    </div>
    <p className="form-messages mb-0 mt-3"></p>
  </form>
);

export default ContactForm;
