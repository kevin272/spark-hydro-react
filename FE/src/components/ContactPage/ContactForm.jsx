import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send message");

      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", number: "", subject: "", message: "" });
    } catch (err) {
      toast.error("❌ Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form2 input-smoke" onSubmit={handleSubmit}>
      <h3 className="h2 mt-n3 mb-25">Get In Touch</h3>
      <div className="row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group col-md-6">
          <input
            type="tel"
            className="form-control"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <select
            name="subject"
            className="form-select"
            value={formData.subject}
            onChange={handleChange}
            required
          >
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
            cols="30"
            rows="3"
            className="form-control"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-btn col-12">
          <button type="submit" className="th-btn fw-btn" disabled={loading}>
            <span
              className="btn-text"
              data-back={loading ? "Sending..." : "Send Message"}
              data-front={loading ? "Sending..." : "Send Message"}
            ></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
