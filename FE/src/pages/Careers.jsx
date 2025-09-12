import Breadcrumb from "../components/Breadcrumb";
import useExternalScripts from "../utils/useExternalScripts";
import CareersContent from "../components/CareerPage/CareerSection";

const Careers = () => {
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
  ],() => {
      // Initialize DOM-dependent plugins
      if (window.$) {
        $(".popup-link").magnificPopup({ type: "image" });
        if (window.Swiper) {
          new Swiper(".swiper", { loop: true });
        }
      }
    }
  );;

  return (
    <>
      <Breadcrumb title="Careers" />
      <CareersContent/>
    </>
  );
};

export default Careers;
