import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/ContactPage/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo";
import ContactMap from "../components/ContactPage/ContactMap";
import useExternalScripts from "../utils/useExternalScripts";
import { useEffect } from "react";

const ContactPage = () => {
  useExternalScripts([
    "/assets/js/vendor/jquery-3.7.1.min.js",
    "/assets/js/bootstrap.min.js",
    "/assets/js/swiper-bundle.min.js",
    "/assets/js/jquery.magnific-popup.min.js",
    "/assets/js/jquery.counterup.min.js",
    "/assets/js/circle-progress.js",
    "/assets/js/jquery-ui.min.js",
    "/assets/js/imagesloaded.pkgd.min.js",
    "/assets/js/isotope.pkgd.min.js",
    "/assets/js/nice-select.min.js",
    "/assets/js/wow.min.js",
    "/assets/js/gsap.min.js",
    "/assets/js/ScrollTrigger.min.js",
    "/assets/js/SplitText.min.js",
    "/assets/js/lenis.min.js",
    "/assets/js/main.js",
    "/assets/js/app.min.js"
  ]);

  useEffect(() => {
    // Initialize DOM-dependent plugins
    if (window.$) {
      window.$(".popup-link").magnificPopup({ type: "image" });
      if (window.Swiper) {
        new window.Swiper(".swiper", { loop: true });
      }
    }
  }, []);

  return (
    <>
    <Breadcrumb title="Contact Us" />
      <ContactInfo />
      <div className="space-bottom">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-7"><ContactForm /></div>
            <div className="col-xl-5"><ContactMap /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
